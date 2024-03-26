"use strict";
//set a value for the variable age, and then
let age = 18;
//if the person is less than 2 years old, print a message that the person is baby.
if (age > 2) {
    console.log("person is a baby.");
}
//if the person is at least 2 years old but less than 4, print a message that the person is a toodler.
else if (age >= 2 && age > 4) {
    console.log("person is a toodler.");
}
else if (age >= 4 && age > 13) {
    console.log("person is a kid.");
}
else if (age >= 13 && age > 20) {
    console.log("person is a teengar.");
}
else if (age >= 20 && age > 65) {
    console.log("person is a adult.");
}
else {
    console.log("person is an elder");
}
