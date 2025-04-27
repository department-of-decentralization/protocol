/**
 * Speaker Verification Script
 *
 * This script verifies the consistency between speaker data in src/speakers.js
 * and the Protocol Berg v2 API. It performs the following checks:
 *
 * 1. Reads the local speakers.js file
 * 2. Fetches speaker data from the Protocol Berg v2 API
 * 3. For each speaker in speakers.js:
 *    - Verifies if their code exists in the API
 *    - Checks if the names match between local and API data
 *    - For speakers without codes, checks if a matching code exists in the API
 *
 * Usage: node verifySpeakers.js
 */

const fs = require("fs");
const path = require("path");

async function verifySpeakers() {
  try {
    // Read the current speakers.js file
    const speakersPath = path.join(__dirname, "src", "speakers.js");
    let speakersContent = fs.readFileSync(speakersPath, "utf8");

    // Remove image imports to avoid require errors
    speakersContent = speakersContent.replace(/require\(.*?\)/g, "null");

    // Extract the speakers array using a simple regex
    const speakersMatch = speakersContent.match(/const speakers = (\[[\s\S]*?\]);/);
    if (!speakersMatch) {
      throw new Error("Could not find speakers array in speakers.js");
    }

    const speakers = eval(speakersMatch[1]);

    // Fetch the API data
    const response = await fetch(
      "https://talx.dod.ngo/api/events/protocol-berg-v2/speakers/?format=json&questions=all&limit=300"
    );
    const data = await response.json();

    // Create a map of speaker codes to their data
    const apiSpeakersMap = new Map();
    data.results.forEach((speaker) => {
      apiSpeakersMap.set(speaker.code, speaker);
    });

    // Create a map of speaker names to their codes
    const nameToCodeMap = new Map();
    data.results.forEach((speaker) => {
      nameToCodeMap.set(speaker.name.toLowerCase(), speaker.code);
    });

    // Print verification for each speaker
    console.log("=== Speaker Verification ===\n");

    speakers.forEach((speaker) => {
      console.log(`Code: ${speaker.code || "No code"}`);
      console.log(`Name from speakers.js:\t ${speaker.name}`);

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
  }
}

verifySpeakers();
