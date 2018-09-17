// Return Largest Numbers in Arrays 1.0

function largestOfFour(arr) {
    // You can do this!
    let largeArray = [];
    for (let i = 0; i < arr.length; i++) {
      let tempArray = arr[i];
      let biggestNum = arr[i][0];
      for (let j = 0; j < tempArray.length; j++) {
        if (tempArray[j] > biggestNum) {
          biggestNum = tempArray[j];
        }
      }
      largeArray.push(biggestNum);
    }
    arr = largeArray;
    return arr;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));



  // Return Largest Numbers in Arrays 1.1

function largestOfFourB(arr) {
  // You can do this!
  let largeArray = [];
  for (let i = 0; i < arr.length; i++) {
    largeArray.push(Math.max(...arr[i]));
  }
  arr = largeArray;
  return arr;
}

console.log(largestOfFourB([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFourB([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFourB([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestOfFourB([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));



//  Confirm the Ending 1.0

function confirmEnding(str, target) {

  let index = str.length;
  let targetLength = target.length;

  let testString = str.substring(index - targetLength, index);

  return testString === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));




// 

