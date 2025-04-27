/**
 * Script to update speaker sessions in src/speakers.json
 *
 * This script:
 * 1. Reads the current speakers.json file
 * 2. Fetches session data from the Protocol Berg v2 API
 * 3. For each speaker with a code, finds their accepted/confirmed sessions
 * 4. Adds an acceptedSessions field to each speaker containing their sessions
 * 5. Updates the speakers.json file with the new data
 *
 * The acceptedSessions field contains:
 * - code: The session's unique identifier
 * - title: The session's title
 *
 * Required environment variables:
 * - PRETALX_API_TOKEN: API token for authentication (see .env-example)
 */

require("dotenv").config();
const fs = require("fs");
const path = require("path");

// Validate environment variables before making any API calls
function validateEnvironment() {
  const token = process.env.PRETALX_API_TOKEN;
  if (!token) {
    console.error("Error: PRETALX_API_TOKEN environment variable is required");
    console.error("Please copy .env-example to .env and set your API token");
    process.exit(1);
  }
  return token;
}

async function updateSpeakerSessions() {
  try {
    // Validate environment before proceeding
    const apiToken = validateEnvironment();

    // Read the current speakers.json file
    const speakersPath = path.join(__dirname, "..", "src", "speakers.json");
    const speakers = JSON.parse(fs.readFileSync(speakersPath, "utf8"));

    // Fetch the sessions data from the API with authentication
    const response = await fetch(
      "https://talx.dod.ngo/api/events/protocol-berg-v2/submissions/?format=json&limit=300",
      {
        headers: {
          Authorization: `Token ${apiToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    console.log(`Total sessions in API: ${data.results.length}`);

    // Create a map of speaker codes to their sessions
    const speakerSessionsMap = new Map();
    data.results.forEach((session) => {
      console.log(`\nProcessing session: ${session.code} (${session.state})`);
      console.log(`Title: ${session.title}`);
      console.log(`Speakers: ${session.speakers.map((s) => `${s.name} (${s.code})`).join(", ")}`);

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

    // Debug: Print all sessions for specific speakers
    const debugSpeakers = ["N8HWF7", "PMDAYM"]; // Lukas and Gajinder
    console.log("\n=== Debug: All Sessions for Specific Speakers ===\n");
    data.results.forEach((session) => {
      session.speakers.forEach((speaker) => {
        if (debugSpeakers.includes(speaker.code)) {
          console.log(`Speaker: ${speaker.name} (${speaker.code})`);
          console.log(`Session: ${session.title} (${session.code})`);
          console.log(`State: ${session.state}`);
          console.log("------------------------");
        }
      });
    });

    // Update each speaker with their sessions
    speakers.forEach((speaker) => {
      if (speaker.code) {
        const sessions = speakerSessionsMap.get(speaker.code) || [];
        speaker.acceptedSessions = sessions;
        if (sessions.length > 0) {
          console.log(`\nUpdated sessions for ${speaker.name} (${speaker.code}):`);
          sessions.forEach((session) => {
            console.log(`- ${session.title} (${session.code})`);
          });
        }
      }
    });

    // Write the updated speakers back to the JSON file
    fs.writeFileSync(speakersPath, JSON.stringify(speakers, null, 2));
    console.log("\nSuccessfully updated speakers.json with session information");

    // Print summary of all sessions and their speakers
    console.log("\n=== Summary of All Sessions ===\n");
    data.results.forEach((session) => {
      console.log(`Session: ${session.code}`);
      console.log(`Title: ${session.title}`);
      console.log(`State: ${session.state}`);
      console.log(`Speakers: ${session.speakers.map((s) => `${s.name} (${s.code})`).join(", ")}`);
      console.log("------------------------");
    });

    // Print speakers without sessions in the API
    console.log("\n=== Speakers Without Sessions in API ===\n");
    const speakersWithSessions = new Set();
    data.results.forEach((session) => {
      session.speakers.forEach((speaker) => {
        speakersWithSessions.add(speaker.code);
      });
    });

    speakers.forEach((speaker) => {
      if (speaker.code && !speakersWithSessions.has(speaker.code)) {
        console.log(`Speaker: ${speaker.name} (${speaker.code})`);
        console.log("------------------------");
      }
    });
  } catch (error) {
    console.error("Error updating speaker sessions:", error);
    process.exit(1);
  }
}

updateSpeakerSessions();
