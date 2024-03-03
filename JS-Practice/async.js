// console.log("First");
// console.log("Second");
// console.log("Third");

// Asynchronous - setTimeout();
// console.log("First");
// setTimeout(() => { console.log("Second"); }, 2000) 
// Note: first argument = function, second argument refers to milliseconds
// console.log("Third");

// a lot of time an app is run by different machines, sometimes it requires the machine to wait for another machine to run. So it's best to allow the machine to prioritise other tasks while waiting.

// Async - JS Callbacks
const getData = (callback) => {
    setTimeout(() => {
        const data = "This is the data.";
        callback(data);
    }, 2000); // simulate the waiting time for fetching data
}

const processData = (data) => {
    console.log("Processed data:", data)
} 

// getData(processData);

// Callback Hell
/* const step1 = (callback) => {
    setTimeout(() => {
        console.log("Step 1 complete.")
        callback();
    }, 1000);
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log("Step 2 complete.")
        callback();
    }, 1000);
}

const step3 = (callback) => {
    setTimeout(() => {
        console.log("Step 3 complete.")
        callback();
    }, 1000);
}

// callback hell
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps complete.");
        })
    })
}) */

// Promises

const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 complete.");
            reject(Error ("I'm an error !")); // Error: use let's say if the server is down
            resolve();
        }, 1000);
    });
};

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 complete.");
            resolve();
        }, 1000);
    });
};

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 complete.");
            resolve();
        }, 1000);
    });
};

/* step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All steps complete.")
    .catch((error) => {
        console.error("An error occured:", error);
    })
    }) */

// Async/Await Keyword
const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        // throw Error("I'm an error");hn   
        console.log("All steps complete.");
    } catch (error) {
        console.error ("an error occured:", error)
    }
}

performSteps();