"use strict";
const userNames = ['Admin', 'Imaan', 'Sonaina', 'Maheen', 'Ayesha'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log('Hello Admin, would you like to see a report?');
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
