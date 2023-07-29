import React from "react";
import pretalxSchedule from "./dummySchedule.json";

const CELL_HEIGHT = 25;
const CONF_START_TIME = "09:30";
const CONF_END_TIME = "23:30";

const CONF_START_HOUR = parseInt(CONF_START_TIME.split(":")[0]);
const CONF_START_MINUTE = parseInt(CONF_START_TIME.split(":")[1]);
const CONF_END_HOUR = parseInt(CONF_END_TIME.split(":")[0]);
const CONF_END_MINUTE = parseInt(CONF_END_TIME.split(":")[1]);

const CONF_START_ABSOLUTE_MINUTES = CONF_START_HOUR * 60 + CONF_START_MINUTE;

const Schedule = () => {
  const { schedule } = pretalxSchedule;
  return (
    <div className="flex flex-row">
      {/* Times */}
      <div className="flex flex-col">
        {generateTimeIntervals(
          CONF_START_TIME,
          CONF_END_TIME,
          schedule.conference.timeslot_duration
        )}
      </div>
      {Object.keys(schedule.conference.days[0].rooms).map((room, i) => {
        return (
          <div
            className={`relative flex flex-col w-32 mx-2 ${
              i % 2 == 0 ? "bg-slate-100" : "bg-slate-300"
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
    backgroundColor: "red",
  };

  return (
    <div className="w-32" style={eventStyle}>
      {event.title}
    </div>
  );
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
        className="border-b border-gray-300"
      >
        {currentMinute % 15 === 0
          ? `${String(currentHour).padStart(2, "0")}:${String(
              currentMinute
            ).padStart(2, "0")}`
          : " ad"}
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
