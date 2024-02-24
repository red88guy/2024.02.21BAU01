// Variables


const my_name = "princess";
let my_age = 18;

// Output using Console Log
console.log(my_name);
console.log(my_age);

/*
Multi-line
Comment
*/

// DATA TYPES

// Primitive Data Types = more basic data type

// Number
const my_num = 20;
let my_num2 = 90.8;

console.log("This is a number:", my_num, my_num2);

// String
let first_name = "Jane";
console.log("This is a string:", first_name);

// Boolean = True or false
let isStudent = true;
console.log("This is a Boolean:", isStudent);

// Undefined -- uninitialised or missing value
let myUndefinedVar;
console.log(myUndefinedVar);

// Null -- (intentionally absence, often used to signified the variable isn't declared)
const myNull = null;
console.log(myNull);

// Reference Data Type -- holds more complex data types

// Object -- represents a collection of key-value pairs enclosed in {}

let person = {
    name: "Jon",
    age: 30,
    city: "New York"
}

console.log(person);

// Array -- represents an ordered list of values enclosed in []

let numbers = [1,2,3,4];

console.log(numbers);

// Function - represents reusable block of codes that can be invoked by name
function greet (name){
    console.log("Hello " + name) ; 
}

greet('Alice');

// Date
const today = new Date();
console.log(today);