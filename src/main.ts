
/*Typescript is moduler and each module has it’s own block.
 So, basically if you could somehow enclose the variable which is declared as let within it’s own module,
  the error will be resolved because now your let variable is in it’s separate block.

To achieve this, simply type export on the top of your script or additionally you can type export {}.
 Now you will see that the error is resolved.

*/
export {}

// we moved the ts file to a src folder
// and everything else to the public folder
// if we do tsc main.ts it will create another javascript file and put it in the src folder but we dont want that
//so we do tsc --init in the terminal
// this creates a tsconfig.json file for us
//we can go there and find the rootDir , uncomment it and change it to "./src"
//and then find the OutDir , uncomment it , and change it to "./public"
//so now weve said that the files in the src should be compiled into the ones in public
// so now we just need to say tsc -w in the terminal and it'l wait for changes in the src folder and compile them in the public folder


console.log('test'); // shows up in the js file in the public folder

// if we create another typescript file outside the src folder, ts will create a js file in the public folder and we dont want that
// so we go to the tsconfig.json file and at the end we'll write " include" : ["src"]
//this means it will ony compile files in the src folder