import React from "react";
import pretalxSchedule from "./dummySchedule.json";

const CELL_HEIGHT = 32;
const CONF_START_TIME = "09:30";
const CONF_END_TIME = "23:30";

const CONF_START_HOUR = parseInt(CONF_START_TIME.split(":")[0]);
const CONF_START_MINUTE = parseInt(CONF_START_TIME.split(":")[1]);
const CONF_END_HOUR = parseInt(CONF_END_TIME.split(":")[0]);
const CONF_END_MINUTE = parseInt(CONF_END_TIME.split(":")[1]);

const CONF_START_ABSOLUTE_MINUTES = CONF_START_HOUR * 60 + CONF_START_MINUTE;
const CONF_END_ABSOLUTE_MINUTES = CONF_END_HOUR * 60 + CONF_END_MINUTE;
const CONF_DURATION_MINUTES =
  CONF_END_ABSOLUTE_MINUTES - CONF_START_ABSOLUTE_MINUTES;
const TOTAL_CELLS = CONF_DURATION_MINUTES / 5;

const COLUMN_WIDTH_TW_STYLE = "min-w-[250px]";
const SCROLL_VIEW_HEIGHT = 900;
const SCROLL_VIEW_HEIGHT_TW_STYLE = "max-h-[" + SCROLL_VIEW_HEIGHT + "px]";

const EventContainer = ({ event, eventStyle }) => {
  const hoursDuration = parseInt(event.duration.split(":")[0]);
  const minutesDuration = parseInt(event.duration.split(":")[1]);
  const totalMinutesDuraation = hoursDuration * 60 + minutesDuration;

  const end = addTimes(event.start, event.duration);
  const eventEndHour = parseInt(end.split(":")[0]);
  const eventEndMinute = parseInt(end.split(":")[1]);

  return (
    <div
      className={`${COLUMN_WIDTH_TW_STYLE} cursor-pointer px-4 pt-4 box-border bg-orange-200 leading-4`}
      style={eventStyle}
    >
      <div className="text-[0.7rem]">
        {event.type} ({totalMinutesDuraation}min)
      </div>
      <div className="text-[0.6rem]">
        {event.start} - {eventEndHour + ":" + eventEndMinute}{" "}
      </div>
      <div className="font-bold text-[0.85rem] mt-2">{event.title}</div>
      <div className="text-[0.75rem]">
        {event.persons.map((person) => person.public_name).join(", ")}{" "}
      </div>
      <div className="mt-2 text-[0.75rem]">
        {" "}
        <b>Track:</b> {event.track}
      </div>
    </div>
  );
};

const Schedule = () => {
  const { schedule } = pretalxSchedule;
  return (
    <div>
      {" "}
      {/* Scrollable timetalbe */}
      <div
        className={`flex flex-col overflow-auto ${SCROLL_VIEW_HEIGHT_TW_STYLE}`}
      >
        <div className="flex">
          {/* Times */}
          <div className="flex flex-col sticky left-0 z-20 bg-slate-100 text-sm">
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
                    i % 2 == 0 ? "bg-gray-200" : "bg-gray-300"
                  } mx-2`}
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
                    className={`relative ${COLUMN_WIDTH_TW_STYLE} mx-2 ${
                      i % 2 == 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
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
          <div className="flex flex-col right-0 z-20 bg-slate-100 text-sm">
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
        className={`text-center text-base px-2 ${
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
  // const conferenceDate = new Date("2023-09-15T08:00:00.000Z")
  // Debug date
  const conferenceDate = new Date("2023-08-11T10:08:06.543Z");

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

export default Schedule;
