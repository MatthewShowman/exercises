// E.g. 1  --  Even numbers

let numbers = [1, 2, 3, 4, 5, 6]  // [2, 4, 6]

let evens = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evens);




// E.g. 2  --  word length

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result = words.filter(function(word) {
    return word.length > 6;
});

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]