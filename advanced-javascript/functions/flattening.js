// Use the reduce method in combination with the concat method
// “Flatten” an array of arrays into a single array that has all the elements of the original arrays.


let arrays = [[1, 2, 3], [4, 5], [6]];

// Original Attempt
function singleArray(arr) {
    return arr.reduce((a, b,) => a.concat(b)); // No Start value needed; starts at the first element
}
console.log(singleArray(arrays)); // → [1, 2, 3, 4, 5, 6]



//Eloquent JS solution
console.log(arrays.reduce((flat, current) => flat.concat(current), []));



// My revision
console.log(arrays.reduce((a, b,) => a.concat(b)));