// Ex 1. Create a function that takes an array as an argument and logs each value of that array to the console.

function logAnArray(anArray) {
    for (i = 0; i <= anArray.length-1; i++) {
        console.log(anArray[i]);
    }
}

let myArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

logAnArray(myArray);


// Ex 2. Create a function that logs true if the argument provided is a number, and false otherwise.

function trueNumber(array) {
    let numberTest = false;
    for (i = 0; i <= array.length-1; i++) {
        if (typeof array[i] === 'number') {
            numberTest = true;
        } else {
            numberTest = false;
        }
        console.log(numberTest);
    }
}

let mixedArray = [1, 'a', 2, 'b', 3, 'c', 4, true];

trueNumber(mixedArray);


// Ex 3. Create a function that takes an array as an argument and multiplies each number in the array by 5 then returns a new array containing the new values.

let multiplierArray = [1, 2, 3, 4, 5];

function timesFive(array) {
    let finalArray = [];
    for (i = 0; i <= array.length-1; i++) { 
        finalArray.push(array[i] * 5);
    }
    return finalArray;
}

console.log(timesFive(multiplierArray));


// Ex 4. Create a function that takes two arguments. This function should return an array that contains all the numbers between the two provided numbers.

function numbersBetween(a, b) {
    let lowNumber;
    let highNumber;
    let numbers = [];

    if (a > b) {
        lowNumber = b;
        highNumber = a;
    } else {
        lowNumber = a;
        highNumber = b;
    }

    for (let i = lowNumber + 1; i < highNumber; i++) {
        numbers.push(i);
    }

    console.log(numbers);
}

numbersBetween(3, 22);


// Ex 5. Create a function takes another function as an argument and multiplies the returned value of that function by 10.

function timesTen(number) {
    let xTen = number * 10;
    console.log(xTen);
}

function getAge(number) {
    myAge = number / 2;
    return myAge;
}

timesTen(getAge(39));