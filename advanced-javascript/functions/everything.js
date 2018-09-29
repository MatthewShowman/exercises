// Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop and one using the some method.

function everyA(array, test) {
    // Your code here.
    for (let item of array) {
        if (!test(item)) { return false; }
    }
    return true;
  }
  
  console.log(everyA([1, 3, 5], n => n < 10));
  // → true
  console.log(everyA([2, 4, 16], n => n < 10));
  // → false
  console.log(everyA([], n => n < 10));
  // → true



function everyB(array, test) {
    // Your code here.
    return !array.some(item => !test(item));
  }


console.log(everyB([1, 3, 5], n => n < 10)); // → true
console.log(everyB([2, 4, 16], n => n < 10)); // → false
console.log(everyB([], n => n < 10)); // → true


