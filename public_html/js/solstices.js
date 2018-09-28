/*
solstices.js
Authors: Roland Johansson & Robert Johansson
Created: September 2018
*/

const solstices = [
    new Date("2018-12-21T22:23:00Z"),
    new Date("2019-12-22T04:19:00Z"),
    new Date("2020-12-21T10:02:00Z"),
    new Date("2021-12-21T15:59:00Z"),
    new Date("2022-12-21T21:48:00Z"),
    new Date("2023-12-22T03:27:00Z"),
    new Date("2024-12-21T09:20:00Z"),
    new Date("2025-12-21T15:03:00Z")
]

// Todays date and time
const now = new Date();

// Fake date and time for testing purposes
const fakeNow = new Date("2018-12-21T22:22:57Z");

//Display the next solstice date
document.getElementById("next-solstice").innerHTML = solstices[0];






// ==== W3C example ====

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);