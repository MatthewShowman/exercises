//create an array from 1 to 10
let forArray = [];

for (let i = 1; i <= 10; i++ ) {
    forArray.push(i);
}

console.log('I can count to 10: ' + forArray);


//double each number in the array
let doubleArray = forArray;

for (let i = 0; i < 10; i++) {
    doubleArray[i] = doubleArray[i] * 2;
}

console.log(doubleArray);