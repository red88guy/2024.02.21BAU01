/* Task 1
Using arrow functions, create a function that calculates the square of a given number and logs the result to the console. */

const square = (num1) => {return num1*num1};

console.log(square(5));

/* Task 2
Craft a welcome message using template literals, including the name and age of a person, */

personName = "Ivy";
personAge = 30;

console.log(`My name is ${personName} and I am ${personAge} years old`);

/* Task 3
Utilize destructuring to extract the first and last name from a person object and log them to the console */

// Create a person object.

const person1 = {
    firstName : "Ding Ding",
    lastName : 25
}

// Without deconstruction.

console.log(person1.firstName);

// With deconstruction

let {firstName,lastName} = person1;
console.log(firstName);
console.log(lastName);

/* Task 4
Employ the spread operator to merge two arrays into a single array */

array1 = [1,2,3];
array2 = [4,5,6];
combinedArray = [...array1, ...array2];

console.log(combinedArray);

/* // Task 5
Create a function that calculates the area of a rectangle using default parameters. */

function square2(x=2,y=2){
    return x*y;
}
console.log(square2());
console.log(square2(3,4));

/* Task 6
Define a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method. */

// const person = {
//     name : undefined,
//     age: undefined,
//     introduce() {
//         return `Hi my name is ${this.name} and I am ${this.age} years old`
//     }
// }

// person2 = person;
// console.log(person2.introduce());

// person3 = person;
// const {name = "Gung"} = person3
// person3.name = "Daisy";
// person3.age = 90;
// console.log(person3.introduce());

// console.log(person2.introduce());


// Re-work... 

function personClass(nameInput,ageInput) {
    return personObj = {
        name: nameInput,
        age: ageInput,
        introduce() {
            return `Hi my name is ${this.name} and I am ${this.age} years old`
        }
    }
}


const person2 = personClass();
console.log("Task 6");
console.log(person2.name);

const person3 = personClass(nameInput = "Daisy", ageInput = 40);
console.log(person2.name);
console.log(person3.name);


console.log(person3.introduce());
console.log(person2.introduce());