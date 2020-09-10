
/*Typescript is moduler and each module has it’s own block.
 So, basically if you could somehow enclose the variable which is declared as let within it’s own module,
  the error will be resolved because now your let variable is in it’s separate block.

To achieve this, simply type export on the top of your script or additionally you can type export {}.
 Now you will see that the error is resolved.

*/
export {}

// let greetings = () => {

//   console.log("hey there");
  
// }
//typescript will automatically infer greetings to be of type function 
// we can initialize greetings to be a function with capital F

let greetings : Function;

greetings = () => {
  console.log("hello again");
  
}

// we can also give types to parameters in a function

const add = ( a : number, b: number, c? : number| string) : void  => {

  console.log(a + b); 
  console.log(c); //logs undefined at the moment
  
}

add( 5, 6) //logs 11 in the console

// add("6", 7) //arleady shows an error because a is supposed to be a number

// if you want an optional parameter just put a question mark after it and only put it after the required parameters


const minus = ( a: number, b: number) : number => {
  return a - b;

}
  let result = minus (10, 7) // the type of result is inferred from the returns of minus

  // however we can explicitly define the type of the return statement by putting after the brackets that contain the parameters

  // if we dont return anything like our add function we can give it type void because it doesnt return anything 
