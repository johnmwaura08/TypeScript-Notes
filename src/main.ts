
/*Typescript is moduler and each module has it’s own block.
 So, basically if you could somehow enclose the variable which is declared as let within it’s own module,
  the error will be resolved because now your let variable is in it’s separate block.

To achieve this, simply type export on the top of your script or additionally you can type export {}.
 Now you will see that the error is resolved.

*/
export {}

/*----Type Alias */

type StringOrNum = string | number; // saves us time instead of writing string or number everywhere

type objWithName = {
  name : string,
  uid: StringOrNum
}
const logDetails = (uid: StringOrNum, item : string) => {
  console.log(`${item} has a uid of ${uid}`)
}

const greet = (user : objWithName) => {
  console.log(`${user.name} says hello`);
  
}

// this type aliases help us out alot and reduce code duplication