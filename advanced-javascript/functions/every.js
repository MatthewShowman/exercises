let sentence = 'Disco Stu doesn\'t advertise'

function wordlengthTest(wordArray, num) {
    let words = wordArray.split(" ");
    let test = words.every(word => word.length > num);
    return console.log(`All of the words in the sentence have more than ${num} letters: ${test}.`);
}

wordlengthTest(sentence, 2);





function greaterThan(numArray, num = 100) {
    return numArray.every(element => element > num);
}

console.log(greaterThan([10, 20, 30], 100));
console.log(greaterThan([200, 300, 400], 100));
console.log(greaterThan([10, 20, 30], 25));


// closure

let greaterThan100 = function(numArray) {
    return greaterThan(numArray, 100);
}