// The GLOBAL scope
// The value outside the function is still available to us in the function. 
// The value outside the function remains the same after the function is called.

let a = 5;

console.log('a in the global scope = ' + a);

function myFunction() {
    console.log('a in function scope = ' + a);
}

myFunction();

console.log('a in the global scope after function called = ' + a);



//The LOCAL scope
// The value inside the function is only available to us inside the function. 

let b = 5;

console.log('b in the global scope = ' + b);

function myFunctionB() {
    let b = 10;
    let c = 7;
    console.log('b in function scope = ' + b);
    console.log('c in function scope = ' + c);
}

myFunctionB();

console.log('b in the global scope after function called = ' + b);
//console.log('c in the global scope after function called = ' + c); --> Undefined



//
let arrayOfNumbers = [1, 8, 5, 12];

for(i =0; i < arrayOfNumbers.length; i++) {
    let currentNumber = arrayOfNumbers[i];
    console.log('current number in loop = ' + currentNumber);
}

//console.log('current number outside of for loop = ' + currentNumber); --> curentNumber is not defined


// A function within a function
// 'sum' is not available outside myInnerFunction
// You want your functions to be "idempotent". that is, you don't want functions to change the global variables

let d = 5;

console.log('b in the global scope = ' + d);

function myFunctionC() {
    let d = 10;
    let e = 7;
    console.log('b in function scope = ' + d);
    console.log('c in function scope = ' + e);
    myInnerFunction();

    function myInnerFunction() {
        let sum = d + e;
        console.log('value of sum within the inner function = ' + sum);
    }
}

myFunctionC();

console.log('d in the global scope after function called = ' + d);
//console.log('e in the global scope after function called = ' + e); --> Undefined