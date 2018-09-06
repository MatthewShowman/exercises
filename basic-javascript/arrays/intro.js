//create an array of strings
let colors = ['red', 'white', 'blue'];

for (let i = 0; i <=2; i++) {
    console.log(colors[i]);
}

//figure the sum of an array
let myNums = [1, 2, 3, 4, 5];
let mySum = 0;

for (let i = 0; i <= myNums.length-1; i++) {
    mySum = mySum + myNums[i];
}

console.log(mySum);

//average of array
let myAvg = mySum / myNums.length;
console.log(myAvg);



let swapArray = [1, 2, 3, 4];
let first = swapArray[0];
let last = swapArray[3];
swapArray[0] = last;
swapArray[3] = first;
console.log(swapArray);


let myArray = [1, 2, 3, 4];

// code
let flippedArray = [];

for (i = 0 ; i <= myArray.length-1; i++) {
    flippedArray[i] = myArray[myArray.length-1-i];
}

myArray = flippedArray;

console.log(myArray); //[4, 3, 2, 1]