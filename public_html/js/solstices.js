/*
solstices.js
Authors: Roland Johansson & Robert Johansson
Created: September 2018
*/

const SOLSTICES = [
  new Date('2018-12-21T23:23:00'),
  new Date('2019-12-22T05:19:00'),
  new Date('2020-12-21T11:02:00'),
  new Date('2021-12-21T16:59:00'),
  new Date('2022-12-21T22:48:00'),
  new Date('2023-12-22T04:27:00'),
  new Date('2024-12-21T10:20:00'),
  new Date('2025-12-21T16:03:00'),
];

// Display the next solstice date
let nextOutput = document.getElementById('next-solstice');

let countdownOutput = document.getElementById('countdown-output');

function findNextSolstice(from) {
  for (i = 0; i < SOLSTICES.length; ++i) {
    if (from < SOLSTICES[i]) {
      return SOLSTICES[i];
    }
  }

  return null;
}

function count(word, count) {
  return count + ' ' + plural(word, count);
}

function plural(word, count) {

  switch (word) {
    case 'dag':
      if (count == 1) {
        return 'dag';
      } else {
        return 'dagar';
      }

    case 'timme':
      if (count == 1) {
        return 'timme';
      } else {
        return 'timmar';
      }

    case 'minut':
      if (count == 1) {
        return 'minut';
      } else {
        return 'minuter';
      }

    case 'sekund':
      if (count == 1) {
        return 'sekund';
      } else {
        return 'sekunder';
      }
  }

  if (count == 1) {
    return word;
  }

  return word + 's';
}

function showTimeLeft() {

  let now = new Date();
  let nextSolstice = findNextSolstice(now);
  if (nextSolstice == null) {
    nextSolsticeOutput.innerHTML = 'Slut på vintersolstånd i vår lista! :-(';
  } else {
    let toNext = dateDifference(now, nextSolstice);
    let options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    countdownOutput.innerHTML = count('dag', toNext.days) + ', ' +
      count('timme', toNext.hours) + ', ' +
      count('minut', toNext.minutes) + ' och ' +
      count('sekund', toNext.seconds);
    nextOutput.innerHTML = nextSolstice.toLocaleDateString('sv-SE', options);
  }
}

showTimeLeft();
countdown = setInterval(showTimeLeft, 1000);
