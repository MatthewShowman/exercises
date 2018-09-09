// The Sum of a Range

// Your code here.
function range(start, end, step = 1) {
    let rangeArray = [];
    if (start > end) {
        for (i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
    } else {
        for (i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
    }
    return rangeArray;
}

function sum(array) {
    arraySum = 0;
    for (i = 0; i <= array.length - 1; i++) {
        arraySum += array[i];
    }
    return arraySum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// Reversing an Array

// Your code here.
function reverseArray(array) {
    let inverse = [];
    for(i =0; i <= array.length - 1; i++) {
        inverse.unshift(array[i]);
    }
    return inverse;
}

function reverseArrayInPlace(array) {
    for(i = 0; i <= Math.floor(array.length / 2); i++) {
        let a = array[i];
        let b = array[array.length - 1 - i];
        array[i] = b;
        array[array.length - 1 - i] = a;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]