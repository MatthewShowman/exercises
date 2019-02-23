function lastDigit(numA, numB) {
    let remainderA = numA%10;
    let remainderB = numB%10;

    return remainderA === remainderB;
}

// console.log(lastDigitA(27,57));
// console.log(lastDigitA(6,17));
// console.log(lastDigitA(3,113));


// function lastDigitB(numA, numB) {
//     lastIntA = numA.toString().slice(-1);
//     lastIntB = numB.toString().slice(-1);

//     return lastIntA === lastIntB;
// }

// console.log(lastDigitB(27,57));
// console.log(lastDigitB(6,17));
// console.log(lastDigitB(3,113));

module.exports = lastDigit;