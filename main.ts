
/*Typescript is moduler and each module has it’s own block.
 So, basically if you could somehow enclose the variable which is declared as let within it’s own module,
  the error will be resolved because now your let variable is in it’s separate block.

To achieve this, simply type export on the top of your script or additionally you can type export {}.
 Now you will see that the error is resolved.

*/
export {}


let age : any;

age = true;

console.log(age); // returns true

age = 'twenty three';

console.log(age); // returns twenty three

age = 22 ;

console.log(age); // returns 22

age = {
    name : 'jonte'
}

console.log(age); //returns {name : 'jonte}


// this use is not recommended because it reverses the use for typescript and doesnt help us in development
