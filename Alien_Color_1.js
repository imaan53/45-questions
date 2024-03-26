"use strict";
// Create a variable called alien color.
let alien_color = 'Green';
if (alien_color === 'Green') {
    console.log("Player just earned 5 points!");
}
//Write one version of this program that passes the if test and another test fails.
alien_color = 'yellow';
//The version that fail will have no output
if (alien_color === 'Green') {
    console.log("Player just earned 5 points!");
}
