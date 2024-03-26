"use strict";
// Equality & inequalit test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
// Equality & inequalit test 2
console.log("Inequality test with strings: ", ("Apple") != "orange");
//Tests using the lowercase function
console.log("Lowercase function test:", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality
console.log("Equality test with numbers:", 26 === 26);
//Numerical tests involving inequality
console.log("Inequality test with numbers:", 26 != 26);
//Greater than test 
console.log("Greater than test: ", 10 > 5);
//less than test
console.log("less than test: ", 5 < 10);
//Greater than or equal to
console.log("Greater than or equal to test", 10 >= 10);
//lesser than or equal to
console.log("Lesser than or equal to test", 5 <= 10);
//Test using "and" operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
//Test using "or" operator
console.log("or operator test: ", 5 === 5 || false);
//Test whether an item is in a array
const fruits = ['Nashpati', 'Banana', 'Guava'];
console.log('test "Nashpati" in the array:', fruits.includes("Nashpati"));
//test whether an item is in a array
console.log('Testing "Apple" is not in array: ', !fruits.includes("APPLE"));
