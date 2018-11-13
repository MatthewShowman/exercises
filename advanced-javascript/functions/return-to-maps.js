let numberArray1 = [5, 6, 7, 8, 9, 10];
let numberArray2 = [11, 12, 13, 14, 15, 16];
let numberArray3 = [17, 18, 19, 20, 21, 22];

function divideByThree(arr) {
    let newArray = arr.map( x => x / 3);
    return newArray;
}

console.log(divideByThree(numberArray1));
console.log(divideByThree(numberArray2));
console.log(divideByThree(numberArray3));


function setIndex(arr) {
    let newArray = arr.map(element => {
        let newObject = {element, index: 0};
    })
    return newArray
}