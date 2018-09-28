/*
solstices.js
Author: Roland Johansson
Created: June 2018
*/

const solstices = [
    new Date("2018-12-21T22:23:00Z").getTime(),
    new Date("2019-12-22T04:19:00Z").getTime(),
    new Date("2020-12-21T10:02:00Z").getTime(),
    new Date("2021-12-21T15:59:00Z").getTime(),
    new Date("2022-12-21T21:48:00Z").getTime(),
    new Date("2023-12-22T03:27:00Z").getTime(),
    new Date("2024-12-21T09:20:00Z").getTime(),
    new Date("2025-12-21T15:03:00Z").getTime()
]

// Get todays date and time
const now = new Date().getTime();

// For testing purposes
// const fakeNow = new Date("Jun 21, 2019 15:03:00").getTime();

let i = 0;
// let distance = solstices[i].getTime() - now;
// const days = Math.floor(distance / (1000 * 60 * 60 * 24));
// const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// const seconds = Math.floor((distance % (1000 * 60)) / 1000);

for (i = 0; now < solstices[i]; i++) {
    console.log(solstices[i]);
    document.getElementById("countdown-output").innerHTML = solstices[0];
}

//1. Every second:

    //a. Loop through list of solstices, stop at current time interval (now < solstices[i]), return the nextSolstice date

    //b. Calculate distance between now and nextSolstice date
    
    //c. Output to HTML
    


// Update the count down every 1 second
// let x = setInterval(function() {

    
//     // Get todays date and time
//     let now = new Date().getTime();
    
//     // Find the distance between now an the count down date
//     let distance = countDownDate - now;
    
//     // Time calculations for days, hours, minutes and seconds
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     // Output the result in an element with id="countdown-output"
//     document.getElementById("countdown-output").innerHTML = "Tid kvar till nästa vintersolstånd<br><span id='time-left'>" + days + " d " + hours + " h "
//     + minutes + " min " + seconds + " s</span>";
    
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("countdown-output").innerHTML = "EXPIRED";
//     }
// }, 1000);