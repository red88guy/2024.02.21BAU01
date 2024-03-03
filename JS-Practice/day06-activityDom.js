// Accessing Elements

// by ID
// const heading = document.getElementById('heading')
// console.log(heading);

// by className
// const heading = document.getElementsByClassName('heading1');
// console.log(heading);

// by tagName
const heading = document.getElementsByTagName("h1");
console.log(heading);
/* 
// by querySelector (access the child)
const listItems = document.querySelectorAll("#list li");
console.log(listItems);

console.log(heading[1]);
console.log(listItems[1]);

// Modifying Elements
// modifying contents using innerHTML
heading[0].innerHTML = "Learning DOM Manipulation";

// using TextContent (strictly for text)
heading[1].textContent = "Element Manipulation !"
*/
// settings attributes
heading[1].setAttribute('class', 'highlight');
// heading[1].setAttribute('height', '200px')
/*
// using style property
const button = document.getElementById("btn");
button.style.backgroundColor = "skyblue"

// Creating elements
const container = document.getElementsByClassName("container");
const newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new paragraph"
container[0].appendChild(newParagraph);

// Handling Events
// const button = document.getElementById("btn");
button.addEventListener("click", addListItem);

function addListItem() {
    const newListItem = document.createElement("li");
    newListItem.textContent = "Wash Dishes"
    document.getElementById("list").appendChild(newListItem);
} */



// Prompt the user to enter a time between 1 to 60.

// Import prompt module
// const prompt = require ("prompt-sync")({sigint: true});

// Ask user for timeInput

let isError = true;

// Repeat the question if number was outside range
while (isError) { 
    timeInput = prompt("Please enter time between 1 to 60: ")
    timeInput = Math.ceil(timeInput); // round up

    // Check for error
    if (timeInput > 0 && timeInput <=60) {
        isError = false;
    } else {
        // Ask question again
        console.log("Please enter Number between the specified range")
    }
}

let remainTime = timeInput;

// Using async JS, create a loop where the value of the time in seconds decrements by 1 every second while display the remaining time every loop. Once the timer reaches 0, the user will be alerted that the time is up.



const delayTime = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve()}, 1000);
    })
}

const timerRun = async () => {
    try{
        while (remainTime>0) {
            console.log("Remaining time = ", remainTime);
            heading[1].textContent = ("Remaining time = " + remainTime);
            await delayTime();
            remainTime-- ; 
        }
        console.log("Time is up");
        heading[1].textContent = "Time is Up !";
    } catch (error) {
        console.error ("an error occured:", error)
    }

}
    
timerRun();
