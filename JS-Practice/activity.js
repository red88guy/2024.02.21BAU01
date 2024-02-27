
// let firstNum = 1;
let firstNum = Number(prompt("Enter first number"));
let secondNum = Number(prompt("Enter second number"));
let operator = prompt("Enter an operator");

switch (operator) {
    case "+":
        console.log(firstNum + secondNum);
        break;
    case "-":
        console.log(firstNum - secondNum);
        break;
    case "*":
        console.log(firstNum * secondNum);
        break;
    case "/":
        console.log(firstNum / secondNum);
        break;
    
}