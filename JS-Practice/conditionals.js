/**
 * Conditional Statements -- allows us to make decisions in our code based on certain conditions.
 */

console.log("----- JS CONDITIONAL STATEMENTS -----");

console.log("=== IF--ELSE ===");
// -- allows you to create a program that runs only if a specific condition is met.

//if statement -- 
let age = 20;
if(age >= 18) {
   console.log("You can now vote.");
} 

//if..else statement
if(age >= 18) {
    console.log("You can now vote.");
} else {
    console.log("You can't vote");
}

//if..else ..if..else
let temp = 25;

if(temp < 0) {
    console.log("It's freezing.");
} else if (temp >= 0 && temp < 20) {
    console.log("It's a cool day.")
} else {
    console.log("It's a warm day.")
}

/*
switch..case statement

3 keywords:
    case : keyword for starting a case block
    break : keyword for stopping the switch statement from running the next code
    default : keyword for running a code when there's no matching case found.
*/

console.log("=== SWITCH...CASE ===");
// --- allows you to control the execution flow of your code.

let day = "Tuesday";

switch(day) {
    case 'Monday': 
        console.log("It's Monday! Start of week.");
        break;
    case 'Friday':
        console.log("It's Friday! End of week.");
        break;
    default:
        console.log("It's a regular day.")
        break;
}

let num = 7;

switch(num) {
    case 1: 
        console.log("The number is one.");
        break;
    case 2:
        console.log("The number is two.");
        break;
    case 3:
        console.log("The number is three.");
        break;
    case 4:
        console.log("The number is four.");
        break;
    default:
        console.log("The number is greater than 4.")
        break;
}