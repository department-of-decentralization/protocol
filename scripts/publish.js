/**
 * Script to identify sessions that are accepted/confirmed in the API but not yet published
 * in speakers.json
 *
 * This script:
 * 1. Fetches all submissions from the Protocol Berg v2 API
 * 2. Reads the current speakers.json file to get published sessions
 * 3. Compares the two lists to find sessions that are in the API but not published
 * 4. Prints the list of unpublished sessions with their details
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawn } = require("child_process");
const { fetchSpeakers, fetchSubmissions } = require("./utils/api");
const { generateImageForSingleSpeaker, generateImageForMultipleSpeakers } = require("./generateImages");

function getSpeakerField(speaker, questionId) {
  const answerObj = (speaker.answers || []).find((a) => a.question && a.question.id === questionId);
  return answerObj ? answerObj.answer : "";
}

/**
 * Fetch unpublished sessions with all necessary info for image generation.
 * Returns all speakers for each session.
 * Throws/skips if no speakers are found for a session.
 * @returns {Promise<Array>} Array of objects: { session, speakers }
 */
async function fetchUnpublishedSessionsWithSpeakers() {
  // Fetch data
  const [speakers, sessions] = await Promise.all([fetchSpeakers(), fetchSubmissions()]);

  // Find all published session codes
  const speakersJson = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "src", "speakers.json"), "utf8"));
  const publishedCodes = new Set();
  speakersJson.forEach((speaker) => {
    (speaker.publishedSessions || []).forEach((session) => publishedCodes.add(session.code));
  });

  // Find all unpublished, accepted/confirmed sessions
  const unpublishedSessions = sessions.filter(
    (s) => (s.state === "accepted" || s.state === "confirmed") && !publishedCodes.has(s.code)
  );
  console.log(`Found ${unpublishedSessions.length} unpublished sessions`);
  unpublishedSessions.forEach((session) => {
    const speakerNames = session.speakers.map((s) => s.name).join(", ");
    console.log(`(${session.code}) - ${session.title} - ${session.state} - ${speakerNames}`);
  });

  // Map to array of { session, speakers }
  const result = [];
  for (const session of unpublishedSessions) {
    if (!session.speakers || session.speakers.length === 0) {
      throw new Error(`Session ${session.code} has no speakers. Skipping.`);
    }
    // Map API speaker objects to full speaker info from API
    const sessionSpeakers = session.speakers
      .map((apiSpeaker) => {
        const speaker = speakers.find((sp) => sp.code === apiSpeaker.code);
        if (!speaker) return null;
        return {
          name: speaker.name,
          code: speaker.code,
          imageUrl: speaker.avatar,
          affiliation: getSpeakerField(speaker, 2),
          socialLink: getSpeakerField(speaker, 3),
        };
      })
      .filter(Boolean);
    if (sessionSpeakers.length === 0) {
      throw new Error(`Session ${session.code} has no matching speakers in API. Skipping.`);
    }
    result.push({
      session: {
        code: session.code,
        title: session.title,
        state: session.state,
      },
      speakers: sessionSpeakers,
    });
  }

  return result;
}

const updateSpeakersJson = (speakersJson, speaker, sessionObj) => {
  let speakerEntry = speakersJson.find((sp) => sp.code === speaker.code);
  if (!speakerEntry) {
    // Add new speaker
    speakerEntry = {
      name: speaker.name,
      code: speaker.code,
      image: speaker.imageUrl ? `/speakers/${speaker.code}.jpg` : null,
      publishedSessions: [],
    };
    if (speaker.affiliation) {
      speakerEntry.organization = { name: speaker.affiliation };
    }
    speakersJson.push(speakerEntry);
  }
  if (speaker.socialLink) {
    const url = speaker.socialLink;
    if (url.includes("twitter.com") || url.includes("x.com")) {
      speakerEntry.twitter = url;
    } else if (url.includes("github.com")) {
      speakerEntry.github = url;
    } else if (url.includes("warpcast.com") || url.includes("farcaster")) {
      speakerEntry.farcaster = url;
    } else if (url.includes("bsky.app")) {
      speakerEntry.bluesky = url;
    } else {
      speakerEntry.website = url; // Default to website if no other match
    }
  }
  if (!speakerEntry.publishedSessions) speakerEntry.publishedSessions = [];
  // Avoid duplicate sessions
  if (!speakerEntry.publishedSessions.some((s) => s.code === sessionObj.session.code)) {
    speakerEntry.publishedSessions.push({
      code: sessionObj.session.code,
      title: sessionObj.session.title,
    });
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

let userEditor = null;

const editInEditor = async (content) => {
  const tmpFile = path.join(__dirname, "tmp_session.json");
  fs.writeFileSync(tmpFile, JSON.stringify(content, null, 2));

  // Use the user's chosen editor, fallback to environment, then vim
  const editor = userEditor || process.env.EDITOR || "vim";

  return new Promise((resolve, reject) => {
    const child = spawn(editor, [tmpFile], {
      stdio: "inherit",
    });

    child.on("exit", () => {
      try {
        const modified = JSON.parse(fs.readFileSync(tmpFile, "utf8"));
        fs.unlinkSync(tmpFile);
        resolve(modified);
      } catch (e) {
        fs.unlinkSync(tmpFile);
        reject(e);
      }
    });
  });
};

async function main() {
  // Ask for editor preference at the start
  await new Promise((resolve) => setTimeout(resolve, 1000));
  userEditor = await promptUser(
    "\n\nWhich editor would you like to use for modifying sessions? (vim/code/sublime/atom/other - press enter for system default): "
  );

  if (userEditor.trim() === "") {
    userEditor = null; // Will use system default
  } else if (userEditor === "code") {
    userEditor = "code --wait"; // VS Code needs --wait flag
  }

  const unpublished = await fetchUnpublishedSessionsWithSpeakers();
  if (!unpublished.length) {
    console.log("No unpublished sessions found.");
    rl.close();
    return;
  }

  // First show all sessions
  console.log("\nFound the following unpublished sessions:");
  unpublished.forEach((sessionObj, index) => {
    console.log(`\n[${index + 1}/${unpublished.length}]:`);
    console.log(JSON.stringify(sessionObj, null, 2));
  });

  const answer = await promptUser("\nWould you like to modify any sessions before processing? (y/n): ");

  const speakersJsonPath = path.join(__dirname, "..", "src", "speakers.json");
  let speakersJson = [];
  if (fs.existsSync(speakersJsonPath)) {
    speakersJson = JSON.parse(fs.readFileSync(speakersJsonPath, "utf8"));
  }

  if (answer.toLowerCase() === "y") {
    // Go through each session with modification options
    for (let i = 0; i < unpublished.length; i++) {
      const sessionObj = unpublished[i];
      console.log(`\nProcessing session [${i + 1}/${unpublished.length}]:`);
      console.log(JSON.stringify(sessionObj, null, 2));

      const action = await promptUser(
        "\nWould you like to:\n" +
          "1. Process this session as is\n" +
          "2. Skip this session\n" +
          "3. Modify this session\n" +
          "Choose (1/2/3): "
      );

      if (action === "2") {
        console.log("Skipping session...");
        continue;
      }

      if (action === "3") {
        console.log("Opening session in editor...");
        try {
          const modified = await editInEditor(sessionObj);
          Object.assign(sessionObj, modified);
          console.log("Session updated successfully.");
        } catch (e) {
          console.error("Invalid JSON. Using original session.");
        }
      }

      try {
        if (sessionObj.speakers.length === 1) {
          await generateImageForSingleSpeaker(sessionObj);
        } else {
          await generateImageForMultipleSpeakers(sessionObj);
        }

        for (const speaker of sessionObj.speakers) {
          updateSpeakersJson(speakersJson, speaker, sessionObj);
        }
      } catch (error) {
        console.error(`Error processing session ${sessionObj.session.code}:`, error);
        const retry = await promptUser("Would you like to retry this session? (y/n): ");
        if (retry.toLowerCase() === "y") {
          i--; // Retry this session
        }
      }
    }
  } else {
    // Process all sessions without modification
    console.log("\nProcessing all sessions...");
    for (const sessionObj of unpublished) {
      try {
        if (sessionObj.speakers.length === 1) {
          await generateImageForSingleSpeaker(sessionObj);
        } else {
          await generateImageForMultipleSpeakers(sessionObj);
        }

        for (const speaker of sessionObj.speakers) {
          updateSpeakersJson(speakersJson, speaker, sessionObj);
        }
        console.log(`Processed session: ${sessionObj.session.code}`);
      } catch (error) {
        console.error(`Error processing session ${sessionObj.session.code}:`, error);
      }
    }
  }

  fs.writeFileSync(speakersJsonPath, JSON.stringify(speakersJson, null, 2));
  console.log("Updated speakers.json with new published sessions.");
  rl.close();
}

if (require.main === module) {
  main();
}
