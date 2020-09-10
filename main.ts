
//typescript uses strict types while javascript doesnt

// we can change the values but not the types
// typescript infers the type based on the value we assign it

let character = 'jone';  // typescript infers that this variable is of the type string

// myName = 40 // theres an error because i cant assign myname to type thats not string 


const circumference = (diameter : number) => {
    return diameter * Math.PI
}


console.log(circumference("hey"))  // we'll return Nan if we dont define the type 
console.log(circumference(7))  // we'll return 21.991148575128552 which is the circumference .. this helps us catch errors 
// it wont complie to javascript if the wrong type is sent in
//