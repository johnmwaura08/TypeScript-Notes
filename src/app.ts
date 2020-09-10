/** iNTERFACES */

//used to enforce certain types 

interface IsPerson {

    name : string;
    age : number;

    speak (a : string) :  void;
    spend ( a : number) : number
}

const me : IsPerson = {  // the methods and contents all follow the general structure defined in the interface
    name: "jonte",
    age : 30,

    speak(text: string) : void {
        console.log(text)
    },

    spend(amount : number) : number {
        console.log( 'i spent', amount);
        return amount;
    }
}

const greetPerson = (person : IsPerson) => {
    console.log('hello', person.name)
}
greetPerson(me); // logs hello jonte

/**************************************************************************************************************** */
import { Invoice} from './classes/Invoice.js' // its dot js because thebrowser compiles js
// export{}

// const anchor = document.querySelector('a')!;
 // typescript is telling me the anchor might possibly be null 
 //but since i know for sure the anchor exists in html , i can just put a ! after the document.queryselector
// console.log(anchor.href); // returns 

// the cool thing about typescript is that it automatically has all the dom elements

//however if we grab something by its classname typescript doesnt know what type it is
// so we can do type casting by using as


// const form = document. querySelector('.new-item-form') as HTMLFormElement; // therefore we get all the methods and properties available to us 


// // inputs 

// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;


// form.addEventListener('submit', (e : Event) => {

//     e.preventDefault();

//     console.log(

//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber // it logs with blue color in the console which shows its a number
//     );
//     // logs payment jonte webdev 500 which i had input in the fields
// })


/**---------------classes */

// they are very similar to classess in javascript
// a class is basically a blue print for an object
// if we wanted to create several invoice objects for our app
// we could create a class to structure those objects




// we can create an object based on our class

const InvOne = new Invoice ( 'jonte', ' work on jontes website', 5000)
const InvTwo= new Invoice ( 'laura', ' work on lauras website', 500)

console.log(InvOne, InvTwo);

let invoices: Invoice[] = []; //now only objects created with the invoice class can be added to this arrray


invoices.push(InvOne);

invoices.push(InvTwo);
 // we can use our classes with our arrays to limit what types of objects are pushed in the array

 // by default all properties in a class are public and can be modified
 // if you want to make something private you can say that and you cant then access it  from outside in the class directly 
 // the other one is readonly, we still can acess it just to read it 


 // a shorthand is this one down here but it only works if you're using access modifiers

 /*


 class Invoice {

    constructor( 
        readonly client : string,
        private details : string,
        public amount : number
    ) {

    }

    format ()  {

                return `${this.client} owes ${this.amount} for ${this.details}`
            }
 }

 */