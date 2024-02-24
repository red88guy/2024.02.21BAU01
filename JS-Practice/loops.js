/**
 * JS LOOPS 
 *  - allows us to repeat a set of instructions multiple times;   
 *  - used to repeatedly execute a block of code until a specific condition is met.
 */

console.log("----- JS LOOPS -----");

/* FOR Loop

for ([initialization] ; [condition]; [arithmetic expression]) {
    // code that will be executed as long as the condition is true.
}
*/

console.log("=== FOR loop ===");
for ( let x = 0; x < 10 ; x++ ) {
    console.log(x);
}

// x = 0 > true > display 0 in console > 0 + 1 = 1 (x = 1)
// x = 1 > true > display 1 in cosole > 1 + 1 = 2 ( x = 2)
// x = 2 > true > display 2 in console > 2 + 1 = 3 ( x = 3)
// ....
// x = 9 > true > display 9 in console > 9 + 1 = 10 ( x = 10)
// x = 10 > false

/* while 

while (condition) { 
    //statement / code block 
}
*/

console.log("=== WHILE loop ===");

let count = 0;
while(count < 10) {
    count++;
    console.log(count);
}

let my_num = 1;
while(my_num <= 5) {
    console.log('Count: ', my_num);
    my_num++;
}

/* do..while 
    -- executes the code block at least once, then checks the condition. If true, it repeats.

do { 
    statement 
} while (condition)
*/

console.log("=== DO...WHILE loop ===");

let j = 1;

do {
    console.log('Do-while count: ', j);
    j++
} while (j <= 5)