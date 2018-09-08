let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let anotherArray = [11, 12, 13];

let middleIndex = myArray.length / 2;

myArray.splice(middleIndex, 0, 'MID');
console.log(myArray);

console.log(anotherArray);

let myNewArray = myArray.concat(anotherArray);

console.log(myNewArray);


//using array.slice

var colors = ["red", "yellow", "blue", "green"];

var primary = colors.slice(0, 3);
var bluegreen = colors.slice(2);

console.log(primary);
console.log(bluegreen);

//using array.join

console.log(colors.join('|'))
console.log(colors.join(''))