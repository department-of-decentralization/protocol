/**
 * API utility functions for Protocol Berg v2
 */

require("dotenv").config();

const API_BASE = "https://talx.dod.ngo/api/events/protocol-berg-v2/";

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

/**
 * Make an authenticated API request to Pretalx
 * @param {string} url - The API endpoint URL
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Response>} The API response
 */
async function fetchWithAuth(url, options = {}) {
  const token = validateEnvironment();
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response;
}

/**
 * Fetch all speakers from the API
 * @returns {Promise<Array>} Array of speaker objects
 */
async function fetchSpeakers() {
  console.log("Fetching speakers...");
  const response = await fetchWithAuth(`${API_BASE}speakers/?format=json&questions=all&limit=300`);
  const data = await response.json();
  console.log("Speakers fetched");
  return data.results;
}

/**
 * Fetch all submissions from the API
 * @returns {Promise<Array>} Array of submission objects
 */
async function fetchSubmissions() {
  console.log("Fetching submissions...");
  const response = await fetchWithAuth(`${API_BASE}submissions/?format=json&limit=300`);
  const data = await response.json();
  console.log("Submissions fetched");
  return data.results;
}

module.exports = {
  fetchWithAuth,
  fetchSpeakers,
  fetchSubmissions,
};
