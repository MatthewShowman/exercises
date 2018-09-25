function globalFunction() { // declare a function called globalFunction
    let a = 7;

    function innerFunction() {
        console.log(a);
    }
    return innerFunction;
}

let assignedFunction = globalFunction();
assignedFunction(); // The a variable will now never have a naming collision with another part of the code



// This is a bad function. It isn't item-potent. The function is using a global variable.
// let count = 0;
// function add() {
//     count++;
//     return count;
// }

// To solve this problem we can create a closure

let add = (function() { //Immediate invoked function expression (IIFE)
    let count = 0;
    return function () {
        count++;
        return count;
    } 
})();//Immediate invoked function expression (IIFE)

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}


let counter1 = counter();
console.log("counter 1 : " + counter1());
console.log("counter 1 : " + counter1());
let counter2 = counter();
console.log("counter 2 : " + counter2());
console.log("counter 2 : " + counter2());

console.log(add());  
console.log(add());




function multiplier(factor) {  
    return function (number) {
        return number * factor;
    }
}
    let twice = multiplier(2);
    let triple = multiplier(3);
    console.log(twice(5));  // → 10
    console.log(triple(5));  // → 15


// a function that include the environment or execution context in which it was called
//  function that references bindings from local scopes around it