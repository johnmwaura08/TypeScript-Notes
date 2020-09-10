// export{}

// const anchor = document.querySelector('a')!;
 // typescript is telling me the anchor might possibly be null 
 //but since i know for sure the anchor exists in html , i can just put a ! after the document.queryselector
// console.log(anchor.href); // returns 

// the cool thing about typescript is that it automatically has all the dom elements

//however if we grab something by its classname typescript doesnt know what type it is
// so we can do type casting by using as

const form = document. querySelector('.new-item-form') as HTMLFormElement; // therefore we get all the methods and properties available to us 


// inputs 

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e : Event) => {

    e.preventDefault();

    console.log(

        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber // it logs with blue color in the console which shows its a number
    );
    // logs payment jonte webdev 500 which i had input in the fields
})