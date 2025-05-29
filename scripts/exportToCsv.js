#!/usr/bin/env node

const fs = require("fs");
const { fetchSubmissions, fetchSpeakers } = require("./utils/api");

// Room ID for Cinema 9 (Workshops)
const WORKSHOP_ROOM_ID = 4;

// Main function
async function exportSessionsToCSV() {
  try {
    console.log("Fetching sessions data...");
    const allSessions = await fetchSubmissions();

    // Filter for only confirmed sessions
    const confirmedSessions = allSessions.filter((session) => session.state === "confirmed");
    console.log(`Found ${confirmedSessions.length} confirmed sessions out of ${allSessions.length} total`);

    // Filter out workshop sessions
    const workshopSessions = confirmedSessions.filter((session) => session.slot?.room_id === WORKSHOP_ROOM_ID);
    const talkSessions = confirmedSessions.filter((session) => session.slot?.room_id !== WORKSHOP_ROOM_ID);

    console.log(`Found ${workshopSessions.length} workshops that were excluded`);

    console.log("Fetching speakers data...");
    const speakers = await fetchSpeakers();

    // Create a map of speaker codes to emails for quick lookup
    const speakerEmailMap = {};
    speakers.forEach((speaker) => {
      speakerEmailMap[speaker.code] = speaker.email;
    });

    // Prepare CSV data
    const csvRows = ["SessionRoom,SessionTitle,StartTime,Day,SpeakerEmails"];
    const sessionsWithoutSpeakers = [];

    talkSessions.forEach((session) => {
      const room = session.slot?.room?.en || "TBD";
      const title = session.title.replace(/"/g, '""'); // Escape quotes in CSV

      // Format start time to show only HH:MM
      let startTime = "TBD";
      let day = "TBD";
      if (session.slot?.start) {
        const date = new Date(session.slot.start);
        startTime = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        // Determine day based on date
        const sessionDate = date.getDate(); // Gets day of month
        if (sessionDate === 12) {
          day = "Day 1";
        } else if (sessionDate === 13) {
          day = "Day 2";
        }
      }

      // Get speaker emails
      const speakerEmails = session.speakers
        .map((speaker) => speakerEmailMap[speaker.code])
        .filter((email) => email) // Remove undefined emails
        .join(","); // Use comma to separate multiple emails

      // Skip sessions with no speaker emails (like lunch breaks, ceremonies, etc.)
      if (!speakerEmails) {
        sessionsWithoutSpeakers.push(session);
        return;
      }

      // Format CSV row (wrap fields with commas in quotes)
      const csvRow = `"${room}","${title}","${startTime}","${day}","${speakerEmails}"`;
      csvRows.push(csvRow);
    });

    // Print info about sessions without speakers
    console.log(`Found ${sessionsWithoutSpeakers.length} sessions without speakers:`);
    const firstTenLetters = sessionsWithoutSpeakers
      .map((session) => {
        const title = session.title;
        return title.length > 10 ? title.substring(0, 10) + "..." : title;
      })
      .join(", ");
    console.log(`\tSession titles (first 10 letters): ${firstTenLetters}`);

    // Write to CSV file
    const csvContent = csvRows.join("\n");
    const filename = "protocol-berg-sessions.csv";

    fs.writeFileSync(filename, csvContent, "utf8");
    console.log(
      `✅ Successfully exported ${talkSessions.length - sessionsWithoutSpeakers.length} sessions to ${filename}`
    );
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

// Run the script
exportSessionsToCSV();
