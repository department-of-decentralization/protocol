import React, { useEffect } from "react";
import ReactModal from "react-modal";
import shuffledSpeakers from "../speakers";
import Speaker from "./Speaker";
import "../styles/modal.css";

const SCHEDULE_LINK =
  "https://speak.protocol.berlin/protocol-berg/schedule/export/schedule.json";

const CELL_HEIGHT = 39;
const CONF_START_TIME = "09:00";
const CONF_END_TIME = "21:00";

const CONF_START_HOUR = parseInt(CONF_START_TIME.split(":")[0]);
const CONF_START_MINUTE = parseInt(CONF_START_TIME.split(":")[1]);
const CONF_END_HOUR = parseInt(CONF_END_TIME.split(":")[0]);
const CONF_END_MINUTE = parseInt(CONF_END_TIME.split(":")[1]);

const CONF_START_ABSOLUTE_MINUTES = CONF_START_HOUR * 60 + CONF_START_MINUTE;
const CONF_END_ABSOLUTE_MINUTES = CONF_END_HOUR * 60 + CONF_END_MINUTE;
const CONF_DURATION_MINUTES =
  CONF_END_ABSOLUTE_MINUTES - CONF_START_ABSOLUTE_MINUTES;
const TOTAL_CELLS = CONF_DURATION_MINUTES / 5;

const COLUMN_WIDTH_TW_STYLE = "min-w-[220px]";
// const SCROLL_VIEW_HEIGHT = 900;
// const SCROLL_VIEW_HEIGHT_TW_STYLE = "max-h-[" + SCROLL_VIEW_HEIGHT + "px]";

const EventContainer = ({ event, eventStyle }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hoursDuration = parseInt(event.duration.split(":")[0]);
  const minutesDuration = parseInt(event.duration.split(":")[1]);
  const totalMinutesDuraation = hoursDuration * 60 + minutesDuration;

  const end = addTimes(event.start, event.duration);
  const eventEndHour = end.split(":")[0];
  const eventEndMinute = end.split(":")[1];

  let backgroundColor, trackFontColor;

  switch (event.track) {
    case "Governance & Society":
      backgroundColor = "bg-orange-100";
      trackFontColor = "text-orange-700";
      break;
    case "Infrastructure":
      backgroundColor = "bg-sky-100";
      trackFontColor = "text-sky-700";
      break;
    case "Consensus":
      backgroundColor = "bg-red-100";
      trackFontColor = "text-red-700";
      break;
    case "Networking":
      backgroundColor = "bg-green-100";
      trackFontColor = "text-green-700";
      break;
    case "Databases":
      backgroundColor = "bg-yellow-100";
      trackFontColor = "text-yellow-700";
      break;
    case "Cryptography":
      backgroundColor = "bg-indigo-100";
      trackFontColor = "text-indigo-700";
      break;
    case "General":
      backgroundColor = "bg-gray-800";
      break;
    default:
      backgroundColor = "bg-gray-200";
      break;
  }

  const tags = extractAndRemoveTags(event.description).tags;
  const description = extractAndRemoveTags(event.description).updatedStr;
  const textColor =
    event.track === "General" ? "text-gray-200" : "text-gray-900";

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  let isMinimal = event.type === "Miscellaneous";

  return (
    <>
      <div
        className={`${COLUMN_WIDTH_TW_STYLE} cursor-pointer px-4 py-4 box-border ${backgroundColor} ${textColor} leading-4 overflow-auto`}
        onClick={handleOpenModal}
        style={eventStyle}
      >
        {!isMinimal && (
          <div className="text-[0.7rem]">
            {event.type} ({totalMinutesDuraation}min)
          </div>
        )}
        <div className="text-[0.6rem]">
          {event.start} - {eventEndHour + ":" + eventEndMinute}{" "}
        </div>
        <div className={`font-bold text-[0.85rem] ${isMinimal ? "" : "mt-2"}`}>
          {event.title}
        </div>
        <div
          className={`${isMinimal ? "text-[0.65rem]" : "text-[0.75rem]"} mb-2`}
        >
          {event.persons.map((person) => person.public_name).join(", ")}{" "}
        </div>
        {!isMinimal && (
          <div className={`text-[0.75rem] italic mb-1`}>
            {" "}
            {tags.map((tag) => "#" + tag).join(", ")}
          </div>
        )}
        {!isMinimal && (
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
            // Default styles
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          content: {
            zIndex: 40,
            backgroundColor: "rgba(180, 180, 180, 0.95)",
            margin: "auto",
          },
        }}
        overlayClassName="flex items-center z-40 px-4 md:px-16 lg:px-32 xl:px-48 transition-all duration-200 ease-in-out py-8 max-h-screen"
        className="flex flex-col items-center justify-center max-h-full"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
      >
        <div className="p-8 overflow-auto max-w-[600px]">
          <div
            className="font-sans tetext-lg text-link p-1 cursor-pointer text-left"
            onClick={handleCloseModal}
          >
            X
          </div>
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
            {event.persons.map((person, i) => (
              <div
                className="text-center min-w-[250px]"
                key={`event-person-${i}`}
              >
                <Speaker
                  speaker={
                    shuffledSpeakers.find(
                      (s) => s.name === person.public_name
                    ) || { name: person.public_name }
                  }
                  index={i}
                />
              </div>
            ))}
          </div>
          {event?.abstract && (
            <div>
              <h2 className="text-lg text-center">Abstract</h2>
              <div
                className="text-sm text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {event.abstract}
              </div>
            </div>
          )}
          {description && (
            <div>
              <h2 className="text-lg text-center">Description</h2>
              <div
                className="text-sm text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {description}
              </div>
            </div>
          )}
        </div>
      </ReactModal>
    </>
  );
};

const Schedule = ({ isDarkMode }) => {
  const [pretalxSchedule, setPretalxSchedule] = React.useState();
  const [scheduleFetchError, setScheduleFetchError] = React.useState(false);

  useEffect(() => {
    fetch(SCHEDULE_LINK)
      .then((response) => response.json())
      .then((data) => {
        setPretalxSchedule(data);
      })
      .catch((error) => {
        console.log(error);
        setScheduleFetchError(error);
      });
  }, []);

  if (!pretalxSchedule) {
    return (
      <div className="flex items-center justify-center h-[900px] text-lg animate-ping">
        Loading Schedule...
      </div>
    );
  }

  if (scheduleFetchError) {
    return (
      <div className="text-red-400">
        Error loading schedule: {"\n" + setScheduleFetchError}
      </div>
    );
  }
  const { schedule } = pretalxSchedule;
  return (
    <div>
      {" "}
      {/* Scrollable timetalbe */}
      <div className={`flex flex-col overflow-auto max-h-[900px]`}>
        <div className="flex">
          {/* Times */}
          <div
            className={`flex flex-col sticky left-0 z-20 ${
              isDarkMode ? "bg-[hsl(0,0%,10%)]" : "bg-slate-100"
            } text-sm`}
          >
            {generateTimeIntervals(
              CONF_START_TIME,
              CONF_END_TIME,
              schedule.conference.timeslot_duration
            )}
          </div>
          <div>
            {/* Room names header */}
            <div className="flex flex-row sticky top-0 z-10 font-bold">
              {Object.keys(schedule.conference.days[0].rooms).map((room, i) => (
                <div
                  className={`${COLUMN_WIDTH_TW_STYLE} text-center ${
                    isDarkMode ? "bg-[hsl(0,0%,10%)]" : "bg-slate-100"
                  } mx-2 py-1`}
                  key={`room-${i}}`}
                >
                  {room}
                </div>
              ))}
            </div>
            {/* Event Columns */}
            <div className="flex h-full">
              {/* Dividers */}
              {/* <div className="relative w-full">{generateDividers()}</div> */}
              {/* NOW Divider */}
              <div className="relative w-full">{generateNowDivider()}</div>
              {Object.keys(schedule.conference.days[0].rooms).map((room, i) => {
                return (
                  <div
                    className={`relative ${COLUMN_WIDTH_TW_STYLE} ${
                      isDarkMode ? "bg-[hsl(0,0%,30%)]" : "bg-gray-100"
                    } mx-2`}
                  >
                    {schedule.conference.days[0].rooms[room].map((event) => {
                      return placeEventOnSchedule(
                        event,
                        schedule.conference.timeslot_duration
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Times, right side */}
          <div
            className={`flex flex-col right-0 z-20 ${
              isDarkMode ? "bg-[hsl(0,0%,10%)]" : "bg-slate-100"
            } text-sm`}
          >
            {generateTimeIntervals(
              CONF_START_TIME,
              CONF_END_TIME,
              schedule.conference.timeslot_duration
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const placeEventOnSchedule = (event, timeslotDuration) => {
  const { start, duration } = event;
  const end = addTimes(start, duration);
  const eventDurationMinutes =
    parseInt(duration.split(":")[0]) * 60 + parseInt(duration.split(":")[1]);
  const timeslotDurationMinutes =
    parseInt(timeslotDuration.split(":")[0]) * 60 +
    parseInt(timeslotDuration.split(":")[1]);

  const eventStartHour = parseInt(start.split(":")[0]);
  const eventStartMinute = parseInt(start.split(":")[1]);
  const eventStartAbsoluteMinutes = eventStartHour * 60 + eventStartMinute;
  const eventEndHour = parseInt(end.split(":")[0]);
  const eventEndMinute = parseInt(end.split(":")[1]);

  // Calculate the number of cells to span
  const eventSpanSize = eventDurationMinutes / timeslotDurationMinutes;
  const eventSpanPixels = eventSpanSize * CELL_HEIGHT;

  // Calculate the number of cells to offset
  const eventOffsetSize =
    (eventStartAbsoluteMinutes - CONF_START_ABSOLUTE_MINUTES) /
    timeslotDurationMinutes;
  const eventOffsetPixels = eventOffsetSize * CELL_HEIGHT;

  const eventStyle = {
    position: "absolute",
    height: eventSpanPixels,
    top: eventOffsetPixels,
  };

  return <EventContainer event={event} eventStyle={eventStyle} />;
};
// Via ChatGPT
const generateTimeIntervals = (start, end, interval) => {
  const result = [];
  const startHour = parseInt(start.split(":")[0]);
  const startMinute = parseInt(start.split(":")[1]);
  const endHour = parseInt(end.split(":")[0]);
  const endMinute = parseInt(end.split(":")[1]);

  // interval is in hh:mm format, conver to minutes
  interval =
    parseInt(interval.split(":")[0]) * 60 + parseInt(interval.split(":")[1]);

  let currentHour = startHour;
  let currentMinute = startMinute;

  while (
    currentHour < endHour ||
    (currentHour === endHour && currentMinute <= endMinute)
  ) {
    const cell = (
      <div
        style={{
          height: CELL_HEIGHT,
        }}
        className={`text-center text-base px-2 pt-2 ${
          currentMinute % 15 === 0 ? "border-b border-gray-300" : ""
        } ${isPastTime(endHour + ":" + endMinute) ? "opacity-50" : ""}`}
      >
        {currentMinute % 15 === 0
          ? `${String(currentHour).padStart(2, "0")}:${String(
              currentMinute
            ).padStart(2, "0")}`
          : ""}
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

const generateDividers = () => {
  const dividers = [];

  for (let i = 0; i < TOTAL_CELLS; i++) {
    const dividerStyle = {
      position: "absolute",
      top: CELL_HEIGHT * i,
      height: CELL_HEIGHT,
    };
    dividers.push(
      <div
        className="w-[900px] border-b-2 border-gray-400 opacity-10 z-[25]"
        style={dividerStyle}
      ></div>
    );
  }
  return dividers;
};

const isPastTime = (eventEndTime) => {
  const eventHour = parseInt(eventEndTime.split(":")[0]);
  const eventMin = parseInt(eventEndTime.split(":")[1]);

  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();

  if (hour > eventHour) return true;
  else if (min > eventMin) return true;
  else return false;
};
const generateNowDivider = () => {
  // Correct date
  const conferenceDate = new Date("2023-09-15T08:00:00.000Z");
  // Debug date
  // const conferenceDate = new Date("2023-08-20T10:08:06.543Z");

  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();

  const isSameDay =
    today.getFullYear() === conferenceDate.getFullYear() &&
    today.getMonth() === conferenceDate.getMonth() &&
    today.getDate() === conferenceDate.getDate();

  if (!isSameDay) {
    return null;
  }

  const nowTotalMinutes = hour * 60 + parseInt(min / 5) * 5; // Round to nearst 5min
  const nowRelativeTotalMinutes = nowTotalMinutes - (9 * 60 + 30); // Relative to conf start hour: 09:30
  const nowCellNumber = nowRelativeTotalMinutes / 5;
  const nowCellOffset = nowCellNumber * CELL_HEIGHT;

  const dividerStyle = {
    position: "absolute",
    top: nowCellOffset,
    height: CELL_HEIGHT,
  };
  return (
    <div
      className="w-[900px] border-b-2 border-red-400 z-[25] animate-bounce "
      style={dividerStyle}
    >
      {" "}
      Now{" "}
    </div>
  );
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

// Via ChatGPT
// Extracts tags from the end of a string and returns the updated string and tags array
function extractAndRemoveTags(inputStr) {
  if (!inputStr) return { tags: [], updatedStr: "" };
  // Regular expression to match <tags>...</tags> pattern
  const tagPattern = /<tags>([^<]+)<\/tags>$/;

  // Test for match
  const match = inputStr.match(tagPattern);

  if (match) {
    // Extract the tags from the captured group
    const tags = match[1].split(",").map((tag) => tag.trim());

    // Remove the matched pattern from the original string
    const updatedStr = inputStr.replace(tagPattern, "").trim();

    return {
      tags: tags,
      updatedStr: updatedStr,
    };
  } else {
    // Return the original string and empty tags array if no match is found
    return {
      tags: [],
      updatedStr: inputStr,
    };
  }
}

export default Schedule;
