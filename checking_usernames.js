"use strict";
let current_users = ['Imaan', 'Amna', 'sonaina', 'Maheen', 'yushfa'];
let new_users = ['Saba', 'maria', 'Imaan', 'umaima', 'yushfa'];
new_users.forEach(newusername => {
    let lowerCase = newusername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase().includes(lowerCase))) {
        console.log(`The username ${newusername}is not available. please write a different username`);
    }
    else {
        console.log(`The username ${newusername} is available`);
    }
});
