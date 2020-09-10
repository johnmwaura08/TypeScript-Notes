
/*Typescript is moduler and each module has it’s own block.
 So, basically if you could somehow enclose the variable which is declared as let within it’s own module,
  the error will be resolved because now your let variable is in it’s separate block.

To achieve this, simply type export on the top of your script or additionally you can type export {}.
 Now you will see that the error is resolved.

*/
export {}



/*------------------explicit types------------------ */

let character : string ; // this lets us initialize a value and in future only allow a string
let age : number; //this lets us initialize a value and in future only allow a nuber
let isLoggedIn: boolean; //this lets us initialize a value and in future only allow a boolean


// age = '44' // this is an error because i'm trying to give it a string and it wont accept
age = 34; // this is okay
character = 'superman'; //okay
isLoggedIn = true // okay


/* ............arrays......... */

let ninjas : string [] = [] // we've initialized this with an empty array and in future we can only push strings into the array


/***union types---*/

//several different types

let mixed : (string|number)[] = [];

mixed.push('hello') // okay
mixed.push(34) // okay

console.log(mixed);//returns [ 'hello' , 34]


 // wwe can also nion types on normal variables not just arrays

let uid : string|number;

uid = '123' // this is okay

uid = 345 // this is okay 

// uid = false // an error because false is a boolean type 


/*---Objects---------- */

let ninjaOne : object;

ninjaOne = {name : 'jonte', age : 22} // this is okay

// however you can be explicit with the types of the object properties before giving them a value

let ninjaTwo : {

    name : string,
    age : number,
    belt : string
}

ninjaTwo = { name : 'james', age : 23, belt: 'black'}