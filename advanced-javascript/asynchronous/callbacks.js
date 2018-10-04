//

// setTimeout(() => {
//     console.log('tick');
//     setTimeout(() => {
//         console.log('tock');
//     }, 1000);
// }, 1000); // the time is set in milliseconds




// Create two functions
// slowfunction: call setTimeout with a delay; log "Slow"
// fastFunction: call setTimeout with a delay; log "Fast"


function slowFunction () {
    setTimeout(() => console.log("Slow"), 1500);
}

function fastFunction () {
    setTimeout(() => console.log("Fast"), 500);
}

// slowFunction();
// fastFunction();


// greet
// add a parameter called "callback"


function greet(callback) {
    console.log("Hello");
    callback();
}
greet(() => console.log('The callback was invoked.'));
greet(() => console.log('Another callback function was invoked.'));
greet(slowFunction);
