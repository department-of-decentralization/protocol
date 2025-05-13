import React, { useEffect } from "react";
import ReactModal from "react-modal";
import Speaker from "./Speaker";
import { marked } from "marked";
import "../styles/modal.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const SCHEDULE_LINK = "https://cfp.protocol.berlin/protocol-berg-v2/schedule/export/schedule.json";

const CELL_HEIGHT = 39;
const CONF_START_TIME = "10:00";
const CONF_END_TIME = "18:00";

const CONF_START_HOUR = parseInt(CONF_START_TIME.split(":")[0]);
const CONF_START_MINUTE = parseInt(CONF_START_TIME.split(":")[1]);
const CONF_END_HOUR = parseInt(CONF_END_TIME.split(":")[0]);
const CONF_END_MINUTE = parseInt(CONF_END_TIME.split(":")[1]);

const CONF_START_ABSOLUTE_MINUTES = CONF_START_HOUR * 60 + CONF_START_MINUTE;
const CONF_END_ABSOLUTE_MINUTES = CONF_END_HOUR * 60 + CONF_END_MINUTE;
const CONF_DURATION_MINUTES = CONF_END_ABSOLUTE_MINUTES - CONF_START_ABSOLUTE_MINUTES;
const TOTAL_CELLS = CONF_DURATION_MINUTES / 5;

const COLUMN_WIDTH_TW_STYLE = "min-w-[220px]";

const EventContainer = ({ event, eventStyle, speakers, isDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hoursDuration = parseInt(event.duration.split(":")[0]);
  const minutesDuration = parseInt(event.duration.split(":")[1]);
  const totalMinutesDuraation = hoursDuration * 60 + minutesDuration;

  const end = addTimes(event.start, event.duration);
  const eventEndHour = end.split(":")[0];
  const eventEndMinute = end.split(":")[1];

  // Get track colors from the API response
  let backgroundColor, trackFontColor;

  switch (event.track) {
    case "Networking":
      backgroundColor = "bg-[#e6f5c9]";
      trackFontColor = "text-green-800";
      break;
    case "Storage":
      backgroundColor = "bg-[#cbd5e8]";
      trackFontColor = "text-blue-800";
      break;
    case "Consensus":
      backgroundColor = "bg-[#fff2ae]";
      trackFontColor = "text-yellow-800";
      break;
    case "Cryptography":
      backgroundColor = "bg-[#fdcdac]";
      trackFontColor = "text-orange-800";
      break;
    case "Infrastructure":
      backgroundColor = "bg-[#f4cae4]";
      trackFontColor = "text-purple-800";
      break;
    case "Philosophy":
      backgroundColor = "bg-[#b3e2cd]";
      trackFontColor = "text-teal-800";
      break;
    case "General":
      backgroundColor = "bg-[#e0e0e0]";
      trackFontColor = "text-gray-800";
      break;
    default:
      backgroundColor = "bg-gray-200";
      trackFontColor = "text-gray-700";
      break;
  }

  const description = event.description || "";
  const textColor = "text-gray-900"; // All tracks use dark text

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  let isMinimal = event.type === "Miscellaneous";
  let isShort = event.type === "Presentation: Short";

  return (
    <>
      <div
        className={`${COLUMN_WIDTH_TW_STYLE} cursor-pointer  ${
          isShort ? "px-3 py-1" : "px-4 py-4"
        } box-border ${backgroundColor} ${textColor} leading-4 overflow-auto`}
        onClick={handleOpenModal}
        style={eventStyle}
      >
        {!isMinimal && !isShort && (
          <div className="text-[0.7rem]">
            {event.type} ({totalMinutesDuraation}min)
          </div>
        )}
        <div className="flex justify-between items-center text-[0.6rem]">
          {event.start} - {eventEndHour + ":" + eventEndMinute} {isShort && "(10min short talk)"}{" "}
          {isShort && (
            <span className={`text-[0.45rem] ${trackFontColor}`}>
              {" "}
              <b>{event.track}</b>
            </span>
          )}
        </div>
        <div
          className={`font-bold ${
            isMinimal || isShort
              ? "text-[0.75rem] line-clamp-2"
              : event.title.length > 70 && event.type === "Presentation: Standard"
              ? "mt-2 text-[0.7rem]"
              : "mt-2 text-[0.85rem]"
          }`}
        >
          {event.title}
        </div>
        <div className={`text-[0.75rem] mb-2`}>{event.persons.map((person) => person.public_name).join(", ")} </div>
        {!isMinimal && !isShort && (
          <div className={`text-[0.75rem] ${trackFontColor}`}>
            {" "}
            <b>Track:</b> {event.track}
          </div>
        )}
      </div>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.5)",
          },
          content: {
            zIndex: 40,
            backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.95)" : "rgba(180, 180, 180, 0.95)",
            margin: "auto",
          },
        }}
        overlayClassName="flex items-center z-40 px-4 md:px-16 lg:px-32 xl:px-48 transition-all duration-200 ease-in-out py-8 max-h-screen"
        className={`flex flex-col items-center justify-center max-h-full ${isDarkMode ? "text-gray-200" : ""}`}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
      >
        <div className={`p-8 overflow-auto max-w-[600px] relative ${isDarkMode ? "text-gray-200" : ""}`}>
          <div className="text-lg font-bold text-center">{event.title}</div>
          <div className="text-center">{event.room}</div>
          <div className="text-base text-center">
            {event.start} - {eventEndHour + ":" + eventEndMinute}{" "}
          </div>
          <div className="text-[0.7rem] text-center">
            {event.type} ({totalMinutesDuraation}min)
          </div>
          <div className="mt-2 text-[0.75rem] text-center">
            {" "}
            <b>Track:</b> {event.track}
          </div>
          <div className="flex items-start justify-center flex-wrap">
            {event.persons.map((person, i) => {
              const matchedSpeaker = speakers.find((s) => s.code === person.code);
              return (
                <div className="text-center min-w-[250px]" key={`event-person-${i}`}>
                  <Speaker speaker={matchedSpeaker || { name: person.public_name, code: person.code }} index={i} />
                </div>
              );
            })}
          </div>
          {event?.abstract && (
            <div>
              <h2 className="text-lg text-center">Abstract</h2>
              <div
                className={`text-sm text-justify markdown-content ${isDarkMode ? "text-gray-200" : ""}`}
                style={{ wordBreak: "break-word" }}
                dangerouslySetInnerHTML={{ __html: marked(event.abstract) }}
              />
            </div>
          )}
          {description && (
            <div>
              <h2 className="text-lg text-center">Description</h2>
              <div
                className={`text-sm text-justify markdown-content ${isDarkMode ? "text-gray-200" : ""}`}
                style={{ wordBreak: "break-word" }}
                dangerouslySetInnerHTML={{ __html: marked(description) }}
              />
            </div>
          )}
          {event.logo && (
            <div className="flex justify-center mt-4">
              <img
                src={event.logo.startsWith("http") ? event.logo : `https://cfp.protocol.berlin${event.logo}`}
                alt="Event graphic"
                className="max-w-full h-auto max-h-[250px]"
              />
            </div>
          )}
          <div className="fixed bottom-1 right-1 flex justify-center">
            <button
              onClick={handleCloseModal}
              className={`px-3 py-1 shadow-lg transition-all duration-200 text-sm flex items-center gap-1 ${
                isDarkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-red-800 text-white hover:bg-red-700"
              }`}
            >
              <MdOutlineCloseFullscreen className="text-lg" /> Close
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

const Schedule = ({ isDarkMode, speakers }) => {
  const [pretalxSchedule, setPretalxSchedule] = React.useState();
  const [scheduleFetchError, setScheduleFetchError] = React.useState(false);
  const [showDay, setShowDay] = React.useState(0); // 0 for first day, 1 for second day

  // Update nowDivider when showDay changes
  const generateNowDivider = () => {
    // Get the actual conference dates from the API if available
    let conferenceDates = [new Date("2025-06-12T08:00:00.000Z"), new Date("2025-06-13T08:00:00.000Z")];

    // Try to get dates from the conference data if available
    if (pretalxSchedule && pretalxSchedule.schedule && pretalxSchedule.schedule.conference) {
      const confData = pretalxSchedule.schedule.conference;
      if (confData.start && confData.end) {
        conferenceDates = [new Date(confData.start + "T08:00:00.000Z"), new Date(confData.end + "T08:00:00.000Z")];
      }
    }

    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" }));
    const hour = today.getHours();
    const min = today.getMinutes();

    // Check if today matches the currently selected conference day
    const selectedDate = conferenceDates[showDay];
    const isSameDay =
      selectedDate &&
      today.getFullYear() === selectedDate.getFullYear() &&
      today.getMonth() === selectedDate.getMonth() &&
      today.getDate() === selectedDate.getDate();

    if (!isSameDay) {
      return null;
    }

    const nowTotalMinutes = hour * 60 + parseInt(min);
    const nowRelativeTotalMinutes = nowTotalMinutes - CONF_START_ABSOLUTE_MINUTES;
    const nowCellNumber = nowRelativeTotalMinutes / 5;
    const nowCellOffset = nowCellNumber * CELL_HEIGHT;

    const dividerStyle = {
      position: "absolute",
      top: nowCellOffset,
      height: CELL_HEIGHT,
      width: "100%",
      zIndex: 30,
    };

    return (
      <div className="border-b-2 border-red-400 z-[25] animate-bounce" style={dividerStyle}>
        <span className="bg-red-400 text-white px-2 py-1 rounded-md text-xs">Now</span>
      </div>
    );
  };

  const [nowDivider, setNowDivider] = React.useState(null);

  useEffect(() => {
    fetch(SCHEDULE_LINK)
      .then((response) => response.json())
      .then((data) => {
        console.log("Schedule data loaded:", data);
        setPretalxSchedule(data);
      })
      .catch((error) => {
        console.error("Error loading schedule:", error);
        setScheduleFetchError(error);
      });
  }, []);

  // Update now divider whenever showDay or time changes
  useEffect(() => {
    if (pretalxSchedule) {
      setNowDivider(generateNowDivider());

      const interval = setInterval(() => {
        setNowDivider(generateNowDivider());
      }, 1000 * 15);

      return () => {
        clearInterval(interval);
      };
    }
  }, [pretalxSchedule, showDay]);

  if (!pretalxSchedule) {
    return <div className="flex items-center justify-center h-[900px] text-lg animate-ping">Loading Schedule...</div>;
  }

  if (scheduleFetchError) {
    return <div className="text-red-400">Error loading schedule: {scheduleFetchError.toString()}</div>;
  }

  const { schedule } = pretalxSchedule;
  const conferenceDays = schedule.conference.days;

  // Handle possible mismatched events in days/rooms
  // Some events might be mistakenly assigned to wrong days or rooms
  const normalizeRooms = () => {
    const dayRooms = {};

    // First, initialize all rooms
    Object.keys(conferenceDays[showDay].rooms).forEach((roomName) => {
      if (roomName !== "4 - Do not use") {
        dayRooms[roomName] = [];
      }
    });

    // Then, collect all events across all rooms
    let allEvents = [];
    Object.keys(conferenceDays[showDay].rooms).forEach((roomName) => {
      if (roomName !== "4 - Do not use") {
        allEvents = [...allEvents, ...conferenceDays[showDay].rooms[roomName]];
      }
    });

    // Fix workshop events that might be in the wrong room
    allEvents.forEach((event) => {
      // Check if the event date matches the current day's date
      const eventDate = new Date(event.date).toISOString().split("T")[0];
      const dayDate = new Date(conferenceDays[showDay].date).toISOString().split("T")[0];

      if (eventDate === dayDate) {
        // Add to the room specified in the event
        if (dayRooms[event.room]) {
          dayRooms[event.room].push(event);
        } else if (event.room !== "4 - Do not use") {
          // If the room doesn't exist yet, create it (as long as it's not the "do not use" room)
          dayRooms[event.room] = [event];
        }
      }
    });

    // Sort events in each room by start time
    Object.keys(dayRooms).forEach((roomName) => {
      dayRooms[roomName].sort((a, b) => {
        const timeA = parseInt(a.start.replace(":", ""));
        const timeB = parseInt(b.start.replace(":", ""));
        return timeA - timeB;
      });
    });

    // Remove empty rooms
    Object.keys(dayRooms).forEach((roomName) => {
      if (dayRooms[roomName].length === 0) {
        delete dayRooms[roomName];
      }
    });

    return dayRooms;
  };

  const dayRooms = normalizeRooms();
  const roomNames = Object.keys(dayRooms).filter((room) => room !== "4 - Do not use");

  return (
    <div>
      {/* Day selector */}
      <div className="flex flex-col sm:flex-row justify-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
        {conferenceDays.map((day, index) => (
          <button
            key={`day-${index}`}
            onClick={() => setShowDay(index)}
            className={`px-4 py-2 rounded transition-all duration-200 ${
              showDay === index
                ? isDarkMode
                  ? "bg-sky-300 text-black shadow-md"
                  : "bg-red-800 text-white shadow-md"
                : isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600 opacity-60 hover:opacity-80"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 opacity-70 hover:opacity-90"
            }`}
          >
            Day {index + 1} -{" "}
            {new Date(day.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
          </button>
        ))}
      </div>

      {/* Scrollable timetable */}
      <div className={`flex flex-col overflow-auto max-h-[900px]`}>
        <div className="flex">
          {/* Times */}
          <div
            className={`flex flex-col sticky left-0 z-20 ${isDarkMode ? "bg-[hsl(0,0%,10%)]" : "bg-slate-100"} text-sm`}
          >
            {generateTimeIntervals(CONF_START_TIME, CONF_END_TIME, schedule.conference.timeslot_duration)}
          </div>
          <div>
            {/* Room names header */}
            <div className="flex flex-row sticky top-0 z-10 font-bold">
              {roomNames.map((room, i) => (
                <div
                  className={`${COLUMN_WIDTH_TW_STYLE} text-center ${
                    isDarkMode ? "bg-[hsl(0,0%,10%)]" : "bg-slate-100"
                  } mx-2 py-1`}
                  key={`room-${i}`}
                >
                  {room}
                </div>
              ))}
            </div>
            {/* Event Columns */}
            <div className="flex h-full">
              {/* NOW Divider */}
              <div className="relative w-full">{nowDivider}</div>
              {roomNames.map((room, i) => {
                return (
                  <div
                    className={`relative ${COLUMN_WIDTH_TW_STYLE} ${
                      isDarkMode ? "bg-[hsl(0,0%,30%)]" : "bg-gray-100"
                    } mx-2`}
                    key={`room-col-${i}`}
                  >
                    {dayRooms[room].map((event, j) => {
                      return placeEventOnSchedule(event, schedule.conference.timeslot_duration, speakers, isDarkMode);
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Times, right side */}
          <div className={`flex flex-col right-0 z-20 ${isDarkMode ? "bg-[hsl(0,0%,10%)]" : "bg-slate-100"} text-sm`}>
            {generateTimeIntervals(CONF_START_TIME, CONF_END_TIME, schedule.conference.timeslot_duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

const placeEventOnSchedule = (event, timeslotDuration, speakers, isDarkMode) => {
  const { start, duration } = event;
  const end = addTimes(start, duration);
  const eventDurationMinutes = parseInt(duration.split(":")[0]) * 60 + parseInt(duration.split(":")[1]);
  const timeslotDurationMinutes =
    parseInt(timeslotDuration.split(":")[0]) * 60 + parseInt(timeslotDuration.split(":")[1]);

  const eventStartHour = parseInt(start.split(":")[0]);
  const eventStartMinute = parseInt(start.split(":")[1]);
  const eventStartAbsoluteMinutes = eventStartHour * 60 + eventStartMinute;

  // Calculate the number of cells to span
  const eventSpanSize = eventDurationMinutes / timeslotDurationMinutes;
  const eventSpanPixels = eventSpanSize * CELL_HEIGHT;

  // Calculate the number of cells to offset
  const eventOffsetSize = (eventStartAbsoluteMinutes - CONF_START_ABSOLUTE_MINUTES) / timeslotDurationMinutes;
  const eventOffsetPixels = eventOffsetSize * CELL_HEIGHT;

  const eventStyle = {
    position: "absolute",
    height: eventSpanPixels,
    top: eventOffsetPixels,
  };

  return <EventContainer event={event} eventStyle={eventStyle} speakers={speakers} isDarkMode={isDarkMode} />;
};

// Via ChatGPT
const generateTimeIntervals = (start, end, interval) => {
  const result = [];
  const startHour = parseInt(start.split(":")[0]);
  const startMinute = parseInt(start.split(":")[1]);
  const endHour = parseInt(end.split(":")[0]);
  const endMinute = parseInt(end.split(":")[1]);

  // interval is in hh:mm format, conver to minutes
  interval = parseInt(interval.split(":")[0]) * 60 + parseInt(interval.split(":")[1]);

  let currentHour = startHour;
  let currentMinute = startMinute;

  while (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute)) {
    const formattedHour = String(currentHour).padStart(2, "0");
    const formattedMinute = String(currentMinute).padStart(2, "0");

    const cell = (
      <div
        style={{
          height: CELL_HEIGHT,
        }}
        className={`flex items-end text-center text-xs sm:text-xs md:text-base px-1 sm:px-2 pt-1 sm:pt-2 ${
          currentMinute % 15 === 0 ? "border-b border-gray-300" : ""
        } ${isPastTime(formattedHour + ":" + formattedMinute) ? "opacity-50" : ""}`}
        key={`time-${formattedHour}-${formattedMinute}`}
      >
        {currentMinute % 15 === 0 ? `${formattedHour}:${formattedMinute}` : ""}
      </div>
    );

    result.push(cell);
    currentMinute += interval;
    if (currentMinute >= 60) {
      currentHour += 1;
      currentMinute = 0;
    }
  }

  return result;
};

const isPastTime = (eventEndTime) => {
  const eventHour = parseInt(eventEndTime.split(":")[0]);
  const eventMin = parseInt(eventEndTime.split(":")[1]);

  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();

  if (hour > eventHour) return true;
  else if (hour === eventHour && min > eventMin) return true;
  else return false;
};

// Via ChatGPT
function addTimes(time1, time2) {
  // Extract hours and minutes from the times
  const [hour1, minute1] = time1.split(":").map(Number);
  const [hour2, minute2] = time2.split(":").map(Number);

  // Add the minutes and hours
  let totalMinutes = minute1 + minute2;
  let totalHours = hour1 + hour2;

  // If totalMinutes is 60 or more, convert to hours
  if (totalMinutes >= 60) {
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;
  }

  // If totalHours is 24 or more, wrap around
  if (totalHours >= 24) {
    totalHours %= 24;
  }

  // Convert the total hours and minutes to strings and pad with zeros if necessary
  const resultHours = String(totalHours).padStart(2, "0");
  const resultMinutes = String(totalMinutes).padStart(2, "0");

  return `${resultHours}:${resultMinutes}`;
}

export default Schedule;
