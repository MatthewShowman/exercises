// Sept 19 Exercise 2
//Write a function that accepts three integers: min, max and step, and returns an array where the first element is the min,
// and each subsequent element is counted up by the step up until the max is reached.

console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
console.log(generateRange(1, 10, 3)); // [1, 4, 7, 10]
console.log(generateRange(19, 49, 2)); // [19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]
console.log(generateRange(10, 82, 9)); // [10, 19, 28, 37, 46, 55, 64, 73, 82]

function generateRange (min, max, step) {
    let range = [];
    for (let i = min; i <= max; i += step) {
        range.push(i);
    }
    return range;
}