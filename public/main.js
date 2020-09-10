"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let greetings = () => {
//   console.log("hey there");
// }
//typescript will automatically infer greetings to be of type function 
// we can initialize greetings to be a function with capital F
var greetings;
greetings = function () {
    console.log("hello again");
};
// we can also give types to parameters in a function
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c); //logs undefined at the moment
};
add(5, 6); //logs 11 in the console
// add("6", 7) //arleady shows an error because a is supposed to be a number
// if you want an optional parameter just put a question mark after it and only put it after the required parameters
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7); // the type of result is inferred from the returns of minus
// however we can explicitly define the type of the return statement by putting after the brackets that contain the parameters
// if we dont return anything like our add function we can give it type void because it doesnt return anything 
