function millisToYears(millis) {
  return Math.floor(millis / 31556926000);
}

function millisToDays(millis) {
  return Math.floor(millis / (1000 * 60 * 60 * 24));
}

function millisToHours(millis) {
  return Math.floor((millis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function millisToMinutes(millis) {
  return Math.floor((millis % (1000 * 60 * 60)) / (1000 * 60));
}

function millisToSeconds(millis) {
  return Math.floor((millis % (1000 * 60)) / 1000);
}

function TimeInterval() {
  this.years = 0;
  this.days = 0;
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
}

// Returns a TimeInterval object with the time left from now to the future date some_date.
function dateDifference(date1, date2) {
  var ti = new TimeInterval();

  let millisDiff = date2 - date1;
  ti.years = millisToYears(millisDiff);
  ti.days = millisToDays(millisDiff);
  ti.hours = millisToHours(millisDiff);
  ti.minutes = millisToMinutes(millisDiff);
  ti.seconds = millisToSeconds(millisDiff);

  return ti;
}