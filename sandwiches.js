"use strict";
function makesandwich(item) {
    console.log('\nMake your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log("Enjoy your sandwich !\n");
}
makesandwich(['Ham', 'Cheese', 'lettuce']);
makesandwich(['Jelly', 'Peanut butter']);
makesandwich(['Turkey', 'Bacon']);
