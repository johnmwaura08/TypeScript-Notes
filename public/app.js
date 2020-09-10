"use strict";
// export{}
// const anchor = document.querySelector('a')!;
// typescript is telling me the anchor might possibly be null 
//but since i know for sure the anchor exists in html , i can just put a ! after the document.queryselector
// console.log(anchor.href); // returns 
// the cool thing about typescript is that it automatically has all the dom elements
//however if we grab something by its classname typescript doesnt know what type it is
// so we can do type casting by using as
var form = document.querySelector('.new-item-form'); // therefore we get all the methods and properties available to us 
// inputs 
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // it logs with blue color in the console which shows its a number
    );
    // logs payment jonte webdev 500 which i had input in the fields
});
//classes 
