"use strict";
exports.__esModule = true;
/*------------------explicit types------------------ */
var character; // this lets us initialize a value and in future only allow a string
var age; //this lets us initialize a value and in future only allow a nuber
var isLoggedIn; //this lets us initialize a value and in future only allow a boolean
// age = '44' // this is an error because i'm trying to give it a string and it wont accept
age = 34; // this is okay
character = 'superman'; //okay
isLoggedIn = true; // okay
/* ............arrays......... */
var ninjas = []; // we've initialized this with an empty array and in future we can only push strings into the array
/***union types---*/
//several different types
var mixed = [];
mixed.push('hello'); // okay
mixed.push(34); // okay
console.log(mixed); //returns [ 'hello' , 34]
// wwe can also nion types on normal variables not just arrays
var uid;
uid = '123'; // this is okay
uid = 345; // this is okay 
// uid = false // an error because false is a boolean type 
/*---Objects---------- */
var ninjaOne;
ninjaOne = { name: 'jonte', age: 22 }; // this is okay
// however you can be explicit with the types of the object properties before giving them a value
var ninjaTwo;
ninjaTwo = { name: 'james', age: 23, belt: 'black' };
