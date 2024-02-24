// VARIABLES

const my_name = "Princess";
let my_age = 18;

//Output using console.log()
console.log(my_name);
console.log(my_age);

/* 
Multi-line 
Comment 
*/

//=== DATA TYPES ===//
console.log("//=== DATA TYPES ===//");

/* Primitive Data Types - most basic data type in JS */
console.log("--- Primitive Data Types ---");

//Number
const my_num = 20;
let my_num2 = 90.8;

console.log("This is a number: ", my_num, my_num2);
console.log(typeof my_num);

//String
let first_name = "Jane";
console.log("This is a string: ", first_name);
console.log(typeof first_name);

//Boolean = True or False
let isStudent = true;
console.log("This is a Boolean: ", isStudent);
console.log(typeof isStudent);

//Undefined -- uninitialized or missing value
let myUndefinedVar;
console.log(myUndefinedVar);
console.log(typeof myUndefinedVar);

//Null -- empty ; intentional absence
const myNull = null;
console.log(myNull);
console.log(typeof myNull);

/**
 * Reference Data Type -- holds more complex data types
 */

console.log("--- Reference Data Types ---");

//Object -- represents a colection of key-value pairs enclosed in { }
let person = {
    name: "Jon",
    age: 30,
    city: 'New York'
};

console.log(person);

//Array -- represents an ordered list of values enclosed in [ ]
let numbers = [ 1, 2, 3, 4];
console.log(numbers);

//Function - represents reusable block of codes that can be invoked by name
function greet(name) {
    console.log("Hello " + name );
}

greet('Alice');

//Date
const today = new Date();
console.log(today);
