import { TZDate } from "@date-fns/tz";

const BerlinDate = function (dateString) {
  if (!dateString) {
    dateString = new Date().toISOString();
  }
  return new TZDate(dateString, "Europe/Berlin");
};

// Add our custom static methods
BerlinDate.now = function () {
  return new TZDate("Europe/Berlin");
};

BerlinDate.fromISOString = function (isoString) {
  return new TZDate("Europe/Berlin", isoString);
};

export default BerlinDate;
