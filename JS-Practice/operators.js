//JS OPERATORS -- enables us to perform various actions, calculations, and comparisons. 

console.log("----- JS OPERATORS -----");

/*
Arithmetic Operator 
 (+), (-), (*), ( / ), ( % )
*/

console.log("=== Arithmetic Operator ===");
let num1 = 21;
let num2 = 10;

//Addition
let sum = num1 + num2;
console.log("Sum is: ", sum);

//Subtraction
let difference = num1 - num2;
console.log("Difference is: ", difference);

//Multiplication
let product = num1 * num2;
console.log("Product is: ", product);

//Division
let quotient = num1 / num2;
console.log("Quotient is: ", quotient);

//Modulo
let mod = num1 % num2;
console.log("Remainder is: ", mod);

/**
 * Assignment Operator 
 ( = ), ( += ), ( -= ), ( *= ), ( /= )
 */

 console.log("=== Assignment Operator ===");
 
 // Equals ( = )
 let equals = "this value";

 // Addition Assignment ( += )
 let a = 5;

 a += 5; //a = a + 5
 console.log(a);

 //Subtraction Assignment ( -= )
 a -= 5; //a = a - 5
 console.log(a);

//Multiplication Assignment ( *= )
 a *= 5; //a = a * 5
 console.log(a);

//Division Assignment ( /= )
 a /= 5; //a = a / 5
 console.log(a);

 /**
  * Comparison Operators -- returns Boolean values (true or false)
  
 Greater than ( > )
 Less than ( < )
 Less than or equal to ( <= )
 Greater than or equal to ( >= )
 Equal to ( == ) --> loose equality; checks if it has the same value; disregards data type
 Strict Equal to ( === ) --> checks not just the value, but also the data type
 Not Equal to ( != )
  */

 console.log("=== Comparison Operator ===");

//Greater than
console.log( 9 > 10 );
console.log( 10 < 20);
console.log( 15 <= 30);
console.log( 20 >= 50);
console.log( '5' == 5);
console.log( '5' === 5 );
console.log( 9 != 20);


/**
 * Logical Operators -- combine boolean values and logical operators to evaluate conditions
 *
 * AND ( && ) , OR ( || ), NOT ( ! ) 
 */

console.log("=== Logical Operator ===");

//AND ( && ) -- returns true if both conditions are true
console.log("AND (&&): ", true && false);

//OR ( || ) -- returns true if at least one of the conditions on its left or right is true.
console.log("OR (||): ", false || true );

//NOT (!) -- reverses the boolean value. 
console.log("NOT (!): ", !true);

/**
 * Unary Operators
 increment (++) , decrement (--)
 */

 console.log("=== Unary Operator ===");

 let x = 10;
 x++; //x + 1
 console.log(x); // 11

 x--; //x - 1 => 11-1
 console.log(x); // 10

/**
 Ternary Operator -- simple conditional statement in a single line; take 3 operands and returns a value based on a condition.
 
 condition ?  expression if true :  expression if false
 */

 console.log("=== Ternary Operator ===");

let age = 20;

let message = (age >= 18) ? "You are of legal age" : "You are a minor.";
console.log(message);


