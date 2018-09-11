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


// A List

// Your code here.
function arrayToList(array) {
    let list = {value: array[array.length -1 ], rest: null};
    for(i = array.length -1; i >= 0; i--) {
        list.rest = list;
        list.value = array[i];
    }
    return list;
}

function listToArray(list) {

}

function prepend(element, list) {

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Deep Comparison

// Your code here.
function deepEqual (a, b) {
    if (a === b) {
        
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true