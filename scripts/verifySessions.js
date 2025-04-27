/**
 * Script to verify session information between speakers.json and the Protocol Berg v2 API
 *
 * This script compares session data between two sources:
 * 1. The local speakers.json file
 * 2. The Protocol Berg v2 API
 *
 * For each session, it displays:
 * - Session code
 * - Session title from both sources
 * - Speaker information from both sources
 *
 * It also identifies speakers without any sessions in speakers.json
 *
 * This helps identify any discrepancies between the local data and the API,
 * such as mismatched titles or speaker assignments.
 */

const fs = require("fs");
const path = require("path");

async function verifySessions() {
  try {
    // Read the current speakers.json file
    const speakersPath = path.join(__dirname, "..", "src", "speakers.json");
    const speakers = JSON.parse(fs.readFileSync(speakersPath, "utf8"));

    // Fetch the sessions data from the API
    const response = await fetch("https://talx.dod.ngo/api/events/protocol-berg-v2/submissions/?format=json&limit=300");
    const data = await response.json();

    // Create a map of session codes to their data for quick lookup
    const sessionsMap = new Map();
    data.results.forEach((session) => {
      sessionsMap.set(session.code, session);
    });

    console.log("=== Session Verification ===\n");

    // Track speakers with sessions
    const speakersWithSessions = new Set();

    // Print each session with both sources of information side by side
    speakers.forEach((speaker) => {
      if (speaker.acceptedSessions && speaker.acceptedSessions.length > 0) {
        speakersWithSessions.add(speaker.code);
        speaker.acceptedSessions.forEach((session) => {
          const apiSession = sessionsMap.get(session.code);
          console.log("------------------------");
          console.log(`Session Code: ${session.code}`);
          console.log(`Session from speakers.json: ${session.title}`);
          console.log(`Session from API        : ${apiSession.title}`);
          console.log(`Speakers from speakers.json: ${speaker.name}`);
          console.log(`Speakers from API        : ${apiSession.speakers.map((s) => s.name).join(", ")}`);
          console.log("------------------------\n");
        });
      }
    });

    // Print speakers without sessions
    console.log("\n=== Speakers Without Sessions ===\n");
    speakers.forEach((speaker) => {
      if (speaker.code && !speakersWithSessions.has(speaker.code)) {
        console.log(`Speaker: ${speaker.name}`);
        console.log(`Code: ${speaker.code}`);
        console.log("------------------------");
      }
    });
  } catch (error) {
    console.error("Error verifying sessions:", error);
  }
}

verifySessions();
