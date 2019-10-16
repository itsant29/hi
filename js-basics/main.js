/*console.log("Hello World!");
console.error("Error!");
console.warn("Warning!");

//global variable
var firstName;
var lastName;

//'let' changeable values
let firstName; 
let lastName;*/

//'const' constant doesnt change
const firstName = 'Alafia'; 
const age = 18.5;
const inClass = true;
const address = null;
let x;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof inClass);
console.log(typeof address);
console.log(typeof x);

console.log(firstName + ' is ' + age + ' years old.');

const sentence = '${firstName} is ${age} years old'
console.log(sentence);

const newArray = ['once', 'twice', 'thrice'];
console.log(newArray[0]);

console.log(newArray.length);
console.log(newArray[0].toUpperCase());
let splitWord = firstName.split('');
console.log(firstName.split());

const firstNumber = 20;
const secondNumber = '20';
const sum = firstNumber + secondNumber;
console.log(sum); //displays 2020

for(let x = 0; x < 10; x++){
    console.log(x);
}
