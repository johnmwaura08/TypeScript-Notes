var myName = 'jonte';
console.log(myName);
// when you do tsc main.ts it creates a new javascript file for us and copies the content from ts file
// remember to do tsc main.ts -w so it can watch out for changes and automatically update them in the javascript file
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
