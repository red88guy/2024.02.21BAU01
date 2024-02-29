/* Exercise 1
Create a function expresssion named add that takes two numbers as parameters and returns their sum. Call the function to add the 2 numbers then log the result
*/

function sum(parameter1, parameter2) {
    sum = parameter1 + parameter2;
    console.log(sum);
}

sum(1,3);

/* Exercise 2
Declare a function named findMax that takes an array of numbers as parameter and returns the maximum value in the array. Call the findMax function with your array of numbers and log the result to the console.
 */


function findMax(array1) {
    return Math.max(...array1);
}

console.log(findMax([8,2,5,12,2,2]));

/* sourced from:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max */

/* Exercise 3
Create a higher-order function called mathOperation that takes two numbers and a callback function as parameters. The callback function should perform a mathematical operation. Use this higher-order function to add,subtract,multiply,and divide two numbers */

function mathOperation(callback, number1, number2) {
    return callback(number1,number2);
}

function add(number1,number2) {
    return number1 + number2;
}

function subtract(number1,number2) {
    return number1-number2;
}


function multiply(number1,number2) {
    return number1*number2;
}

function divide(number1,number2) {
    return number1/number2;
}

console.log(mathOperation(divide, 10,2));

/* Exercise 4:
Write a function called applyFunction that takes a function and array as parameters. It should apply the given function to each element of the array and return a new arra with the results */

function applyFunction(callback, array) {
    // array.forEach(callback(array));
    for(let i=0; i<array.length; i++) {
        array[i] = callback(array[i]);
    }
    return array;    
}

function log(arrayNum) {
    return Math.log(arrayNum);
}

function square(arrayNum){
    return arrayNum*arrayNum;
}

console.log(applyFunction(square,([2,2,3,4,5])));

/* Exercise 5
Create a function getUserData that simulates fetching user data from a server. It should accept a callback function as parameter. Call the callback function with a user object once the data is retrieved. */

// function getUserData() {
//     let userInput = prompt("Please provide callback function");
//     result = isDataReceived(userInput);
//     console.log("Client message: Data received =", result);

// }

// function isDataReceived(userInput) {
//     if (userInput == null || userInput == "") {
//         console.log("Server message: data not received");
//         return false
//     }
//     else {
//         console.log("Server message: data is received")
//         return true
//     }
// }

// getUserData();