"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*----------------Function Signatures */
//example 1
var greet;
// our function will look like this, if one of them was a number it wont work
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
//example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
