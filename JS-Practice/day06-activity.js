// Prompt the user to enter a time between 1 to 60.

// Import prompt module
const prompt = require ("prompt-sync")({sigint: true});

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
            await delayTime();
            remainTime-- ; 
        }
        console.log("Time is up");
    } catch (error) {
        console.error ("an error occured:", error)
    }

}
    
timerRun();