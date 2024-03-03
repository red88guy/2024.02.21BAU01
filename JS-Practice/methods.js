//== String Methods ===

//split() -- lets you break/split an array of strings separating them into substrings based on a specified separator

const message = "Hello, world!";
let words = message.split(", ");
console.log(words);

//splitting a string into words
const sentence = "The quick brown fox jumps over a lazy dog.";
let words2 = sentence.split(" "); //split by space
console.log(words2);

//splittin into characters
const sent = "Hello";
let words3 = sent.split('') //split by empty string
console.log(words3);

const email = 'sample.email@gmail.com';
const words4 = email.split('@');
console.log(words4);

//includes() -- search for word matches and returns true or false
//if a word is present in a sentence
const containsWord = sentence.includes("fox");
console.log(containsWord);

//check if substring is present in a larger string
let str = "Hello there!";
let subStr = str.includes("or");
console.log(subStr);

//length -- displays the number of characters in a string, including whitespaces
let sampleString = "Welcome to Modern JS";
const strLength = sampleString.length;
const emptyStr = '';
console.log(strLength);
console.log(emptyStr.length);

//toLowerCase() ; toUpperCase()
let mixedCases = 'ThiS Has SomE MixEd CasE!';
const lowerCaseVer = mixedCases.toLowerCase();
const upperCaseVer = mixedCases.toUpperCase();

console.log(lowerCaseVer, upperCaseVer);

// Math Methods

// max
const maxNumber = Math.max(10,5,20);
console.log(maxNumber);

// min
const minNumber = Math.min(10,5,20);
console.log(minNumber);

const numbers = [10,5,20];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// random() - displays a floating number between 0 (inclusive) and 1(exclusive);
const randomValue = Math.random();
console.log(randomValue);

console.log(Math.random() * 100); // random from 0 and 99

// floor() -- rounds down the floating-point number to the nearest interger.

const roundNumber = Math.floor(3.5);
console.log(roundNumber);

// ceil() - round up the floating-point number to the nearest interger.
const roundUp = Math.ceil(3.5);
console.log(roundUp);

// round() - round down (0-4), round up(5-9)
const roundMethod = Math.round(3.6);
console.log(roundMethod);

// Nested Methods

// Math.min() and Math.max()
let num1 = 15;
let num2 = 17;
let num3 = 10;
let num4 = 35;

const minValue = Math.min(num1,num2,num3,num4);
const maxValue = Math.max(num1,num2,num3,num4);

console.log("Minimum Value: ", minValue);
console.log("Maximum Value: ", maxValue);

// Math.floor() and Math.random()
function getRandomInt (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max-min) + 1) + min;
}

const randomInteger = getRandomInt(1,10);
console.log(randomInteger);

// toFixed() -- display a number rounded off to the nearest umber of decimal places
const fixedNumber = 3.141592.toFixed(2);
console.log(fixedNumber);