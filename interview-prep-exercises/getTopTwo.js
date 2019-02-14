function getTopTwo(myArray) {
    let biggest = 0;
    let secondBiggest = 0;
    let topTwoArray = [];
    for(let num of myArray) {
        if(num > biggest) {
            secondBiggest = biggest;
            biggest = num;
        }
        else if(num > secondBiggest){
            secondBiggest = num;
        }
    }
    topTwoArray.push(biggest);
    topTwoArray.push(secondBiggest);
    return topTwoArray;
    // return [ secondBiggest, biggest];
}

let array1 = [2, 1, 3];
let array2 = [5, 1, 6, 7, 9];

console.log(getTopTwo(array1));
console.log(getTopTwo(array2));