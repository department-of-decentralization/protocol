/**
 * Speaker Verification Script
 *
 * This script verifies the consistency between speaker data in src/speakers.json
 * and the Protocol Berg v2 API. It performs the following checks:
 *
 * 1. Reads the local speakers.json file
 * 2. Fetches speaker data from the Protocol Berg v2 API
 * 3. For each speaker in speakers.json:
 *    - Verifies if their code exists in the API
 *    - Checks if the names match between local and API data
 *    - For speakers without codes, checks if a matching code exists in the API
 *
 * Required environment variables:
 * - PRETALX_API_TOKEN: API token for authentication (see .env-example)
 *
 * Usage: node verifySpeakers.js
 */

const fs = require("fs");
const path = require("path");
const { fetchSpeakers } = require("./utils/api");

async function verifySpeakers() {
  try {
    // Read the current speakers.json file
    const speakersPath = path.join(__dirname, "..", "src", "speakers.json");
    const speakers = JSON.parse(fs.readFileSync(speakersPath, "utf8"));

    // Fetch the API data
    const apiSpeakers = await fetchSpeakers();

    // Create a map of speaker codes to their data
    const apiSpeakersMap = new Map();
    apiSpeakers.forEach((speaker) => {
      apiSpeakersMap.set(speaker.code, speaker);
    });

    // Create a map of speaker names to their codes
    const nameToCodeMap = new Map();
    apiSpeakers.forEach((speaker) => {
      nameToCodeMap.set(speaker.name.toLowerCase(), speaker.code);
    });

    // Print verification for each speaker
    console.log("=== Speaker Verification ===\n");

    speakers.forEach((speaker) => {
      console.log(`Code: ${speaker.code || "No code"}`);
      console.log(`Name from speakers.json: ${speaker.name}`);

      if (speaker.code) {
        const apiSpeaker = apiSpeakersMap.get(speaker.code);
        if (apiSpeaker) {
          console.log(`Name from API:\t\t ${apiSpeaker.name}`);
        } else {
          console.log("No matching speaker found in API");
        }
      } else {
        // Try to find a matching code by name
        const matchingCode = nameToCodeMap.get(speaker.name.toLowerCase());
        if (matchingCode) {
          console.log(`Available code in API: ${matchingCode}`);
        }
      }

      console.log("------------------------\n");
    });
  } catch (error) {
    console.error("Error verifying speakers:", error);
    process.exit(1);
  }
}

verifySpeakers();
