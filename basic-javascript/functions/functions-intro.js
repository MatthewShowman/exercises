// FIRST way to dreate a function

let sayHi = function () {
    console.log("Hi");
}

sayHi();
sayHi();
sayHi();


// Void function
let say = function(words) {
    console.log(words);
}

say("If you can dodge a wrench, you can dodge a ball.");


// Add two numbers together
let sumA = function(a, b) {
    console.log (a + " + " + b + " = " + (a + b));
}

sumA(5, 6);

//Returning from a function
let sumB = function(a, b = 0) {
    return a + b;
}

let mySum = sumB(100, 200);
console.log(mySum);


//an array function

let myArray = [2, 3, 4, 6, 1];
let sumUp = 0;

function average(numArray) {
    for(i = 0; i <= numArray.length-1; i++) {
        sumUp = sumUp + numArray[i];
    }
    let average = sumUp / numArray.length;
    return average;
}

let arrayAverage = average(myArray);
console.log(arrayAverage);


// Multiple return statements
// 'WOOF WOOF'
// 'yip yip'

let bigBark = bark(50);
let littleBark = bark(5);
console.log(bigBark);
console.log(littleBark);

function bark(weight) {
    if (weight >= 20) {
        return 'WOOF WOOF';
    } else {
        return 'yip yip';
    }
}
