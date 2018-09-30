// Write a function called add2 that takes a single array of integers as a parameter
// It returns an array with all of the numbers increased by two.

function add2 (arr) {
    return arr.map(x => x + 2);
}

console.log(add2([1, 2, 3])); 
console.log(add2([8, 12, 14])); 