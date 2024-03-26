"use strict";
//Store the locations in a array. Make sure the array is not in alphabetic order.
let places = ['Germany , London , Dubai , Canada , korea'];
//Print your array in its orignal order.
console.log('orignal ' + places);
//print your array in alphabetic order without modifying the actual list.
console.log('copy ' + [...places].sort());
//Show your array is still in its orignal order by printing it.
console.log('orignal ' + places);
//print your array in reverse alphabetic order without changing the order of the orignal list 
console.log('copy ' + [...places].sort().reverse());
//Show your array is still in its orignal order by printing it again.
console.log('orignal ' + places);
//Reverse the order of your list.Print the array to show that its order has changed.
console.log('orignal ' + places.reverse());
//Reverse the order of your list again. Print the list to show it's back to its orignal order.
console.log('orignal ' + places.reverse());
//Sort your array so it's stored in alphabetic order. print the array to show that its order has been changed.
console.log('orignal ' + places.sort());
//Sort to change your array so it's stored in reverse alphabetic order. Print the list to show that its order has been changed
console.log('orignal ' + places.sort().reverse());
