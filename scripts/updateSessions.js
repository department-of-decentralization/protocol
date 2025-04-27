/**
 * Script to update speaker sessions in src/speakers.js
 *
 * This script:
 * 1. Reads the current speakers.js file
 * 2. Fetches session data from the Protocol Berg v2 API
 * 3. For each speaker with a code, finds their accepted/confirmed sessions
 * 4. Adds an acceptedSessions field to each speaker containing their sessions
 * 5. Updates the speakers.js file with the new data
 *
 * The acceptedSessions field contains:
 * - code: The session's unique identifier
 * - title: The session's title
 */

const fs = require("fs");
const path = require("path");

async function updateSpeakerSessions() {
  try {
    // Read the current speakers.js file
    const speakersPath = path.join(__dirname, "..", "src", "speakers.js");
    let speakersContent = fs.readFileSync(speakersPath, "utf8");

    // Remove image imports to avoid require errors
    const cleanContent = speakersContent.replace(/require\(.*?\)/g, "null");

    // Extract the speakers array using a simple regex
    const speakersMatch = cleanContent.match(/const speakers = (\[[\s\S]*?\]);/);
    if (!speakersMatch) {
      throw new Error("Could not find speakers array in speakers.js");
    }

    const speakers = eval(speakersMatch[1]);

    // Fetch the sessions data from the API
    const response = await fetch("https://talx.dod.ngo/api/events/protocol-berg-v2/submissions/?format=json&limit=300");
    const data = await response.json();

    // Create a map of speaker codes to their sessions
    const speakerSessionsMap = new Map();
    data.results.forEach((session) => {
      // Only include accepted or confirmed sessions
      if (session.state === "confirmed" || session.state === "accepted") {
        session.speakers.forEach((speaker) => {
          if (!speakerSessionsMap.has(speaker.code)) {
            speakerSessionsMap.set(speaker.code, []);
          }
          speakerSessionsMap.get(speaker.code).push({
            code: session.code,
            title: session.title,
          });
        });
      }
    });

    // Update each speaker with their sessions
    speakers.forEach((speaker) => {
      if (speaker.code) {
        const sessions = speakerSessionsMap.get(speaker.code) || [];
        speaker.acceptedSessions = sessions;
      }
    });

    // Convert the updated speakers array back to a string
    // Preserve the correct formatting for require statements and field names
    const updatedSpeakersStr = JSON.stringify(speakers, null, 2)
      .replace(/"image": null/g, 'image: require("./images/speakers/placeholder.jpg")')
      .replace(/"acceptedSessions":/g, "acceptedSessions:")
      .replace(/"code":/g, "code:")
      .replace(/"title":/g, "title:");

    // Update the speakers.js file with the new content
    const updatedContent = `const speakers = ${updatedSpeakersStr};\n\nconst shuffledSpeakers = speakers.sort(() => (Math.random() > 0.5 ? 1 : -1));\n\nexport default shuffledSpeakers;`;

    fs.writeFileSync(speakersPath, updatedContent);
    console.log("Successfully updated speakers.js with session information");
  } catch (error) {
    console.error("Error updating speaker sessions:", error);
  }
}

updateSpeakerSessions();
