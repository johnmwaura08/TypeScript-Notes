
/*Typescript is moduler and each module has it’s own block.
 So, basically if you could somehow enclose the variable which is declared as let within it’s own module,
  the error will be resolved because now your let variable is in it’s separate block.

To achieve this, simply type export on the top of your script or additionally you can type export {}.
 Now you will see that the error is resolved.

*/
export {}

/*----------------Function Signatures */

//example 1
let greet : (a : string, b: string) => void;


// our function will look like this, if one of them was a number it wont work
greet = (name : string, greeting : string) => {

  console.log(`${name} says ${greeting}`);
  
}

//example 2

let calc : (a : number, b: number, c: string) => number;


calc = (numOne: number, numTwo : number, action : string) => { // we're following the signature of our function types

  if(action === 'add') {

    return numOne + numTwo
  } 
  else {
    return numOne - numTwo
  }
}

// example 3


let logDetails : (obj : {name : string, age: number}) => void

type person = {name: string, age: number};


logDetails  = ( ninja : person) => {  // still valid even if we dont have to type the parameters inside because we've used the type alias

  console.log(`${ninja.name} is ${ninja.age} years old`);
  
}