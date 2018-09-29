/*
solstices.js
Authors: Roland Johansson & Robert Johansson
Created: September 2018
*/

const solstices = [
    new Date("2018-12-21T22:23:00+01:00"),
    new Date("2019-12-22T04:19:00+01:00"),
    new Date("2020-12-21T10:02:00+01:00"),
    new Date("2021-12-21T15:59:00+01:00"),
    new Date("2022-12-21T21:48:00+01:00"),
    new Date("2023-12-22T03:27:00+01:00"),
    new Date("2024-12-21T09:20:00+01:00"),
    new Date("2025-12-21T15:03:00+01:00")
]

// Display the next solstice date
let nextOutput = document.getElementById("next-solstice");

// ===== Bday Calculator ===== //

let countdownOutput = document.getElementById("countdown-output");

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
// TODO: Throw exception if date2 < date1
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

function findNextSolstice(from) {
    for (i = 0; i < solstices.length; ++i) {
        if (from < solstices[i]) {
            return solstices[i];
        }
    }
    return null;
}

function count(word, count) {
    return count + " " + plural(word, count);
}

function plural(word, count) {
    switch (word) {
        case "dag":
            if (count == 1) {
                return "dag";
            }
            else {
                return "dagar";
            }
        case "timme":
            if (count == 1) {
                return "timme";
            }
            else {
                return "timmar";
            }
        case "minut":
            if (count == 1) {
                return "minut";
            }
            else {
                return "minuter";
            }
        case "sekund":
            if (count == 1) {
                return "sekund";
            }
            else {
                return "sekunder"
            }
    }

    if (count == 1) {
        return word;
    }
    return word + "s";
}

function showTimeLeft() {

    let now = new Date();
    // Fake date and time for testing purposes
    //const now = new Date("2018-12-21T22:22:57Z")
    //const now = new Date("2029-12-21T10:01:54");
    let nextSolstice = findNextSolstice(now);
    if (nextSolstice == null) {
        nextSolsticeOutput.innerHTML = "Slut på vintersolstånd! :-(";
    }
    else {
        let toNext = dateDifference(now, nextSolstice);
        countdownOutput.innerHTML = "Nästa vintersolstånd inträffar om " + count("dag", toNext.days) + ", " + count("timme", toNext.hours) + ", " + count("minut", toNext.minutes) + " och " + count("sekund", toNext.seconds);
        nextOutput.innerHTML = "Nästa vintersolstånd är " + nextSolstice.toLocaleDateString();
    }
}

showTimeLeft();
countdown = setInterval(showTimeLeft, 1000);