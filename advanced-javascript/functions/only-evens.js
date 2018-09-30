// Write a function called onlyEvens that takes an array of integers as a parameter.
// The function returns an array with only even numbers.

function onlyEvens (arr) {
    return arr.filter(element => element % 2 ===0);
}


console.log(onlyEvens([1, 2, 3, 4, 5]));