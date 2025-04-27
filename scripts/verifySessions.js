/**
 * Script to verify session information between speakers.js and the Protocol Berg v2 API
 *
 * This script compares session data between two sources:
 * 1. The local speakers.js file
 * 2. The Protocol Berg v2 API
 *
 * For each session, it displays:
 * - Session code
 * - Session title from both sources
 * - Speaker information from both sources
 *
 * This helps identify any discrepancies between the local data and the API,
 * such as mismatched titles or speaker assignments.
 */

const fs = require("fs");
const path = require("path");

async function verifySessions() {
  try {
    // Read the current speakers.js file
    const speakersPath = path.join(__dirname, "..", "src", "speakers.js");
    let speakersContent = fs.readFileSync(speakersPath, "utf8");

    // Remove image imports to avoid require errors when evaluating
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

    // Create a map of session codes to their data for quick lookup
    const sessionsMap = new Map();
    data.results.forEach((session) => {
      sessionsMap.set(session.code, session);
    });

    console.log("=== Session Verification ===\n");

    // Print each session with both sources of information side by side
    speakers.forEach((speaker) => {
      if (speaker.acceptedSessions && speaker.acceptedSessions.length > 0) {
        speaker.acceptedSessions.forEach((session) => {
          const apiSession = sessionsMap.get(session.code);
          console.log("------------------------");
          console.log(`Session Code: ${session.code}`);
          console.log(`Session from speakers.js: ${session.title}`);
          console.log(`Session from API        : ${apiSession.title}`);
          console.log(`Speakers from speakers.js: ${speaker.name}`);
          console.log(`Speakers from API        : ${apiSession.speakers.map((s) => s.name).join(", ")}`);
          console.log("------------------------\n");
        });
      }
    });
  } catch (error) {
    console.error("Error verifying sessions:", error);
  }
}

verifySessions();
