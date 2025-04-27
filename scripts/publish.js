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
const { fetchSpeakers, fetchSubmissions } = require("./utils/api");

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

module.exports = { fetchUnpublishedSessionsWithSpeakers };
