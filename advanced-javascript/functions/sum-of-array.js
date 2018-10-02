// Use the reduce function to calculate the sum of an array of numbers.

console.log([1,2,3,4,5].reduce((total, current) => total + current));

function sumArray(numArray) {
    let sum = numArray.reduce(function(total, current) {
        return total + current;
    }, 0); // The starting value is NOT needed if the value is 0
    return sum;
}

function sumArrayArrow(numArray) {
    return numArray.reduce((total, current) => total + current);
}

console.log(sumArray([1, 2, 3, 4, 5, 7, 8]));
console.log(sumArrayArrow([,11, 12, 13, 14, 15]));