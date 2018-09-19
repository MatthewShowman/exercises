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



  // Return Largest Numbers in Arrays 2.0

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




// Repeat a String Repeat a String 1.0
// Repeat a given string str (first argument) for num times (second argument)
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeatedString = "";

  if (num <= 0) {
    repeatedString;
  } else {
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
  }

  return repeatedString;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("&", -2));




// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  let truncatedString = "";

  if (str.length <= num) {
    truncatedString = str;
  } else {
    truncatedString = str.substring(0,num) + "...";
  }
  return truncatedString;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-", 1));




// Finders Keepers
// Create a function that looks through an array (first argument)
// and returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); //undefined

function findElement(arr, func) {
   let num = 0;
   for (let i = 0; i < arr.length; i++) {
     if (func(arr[i])) {
      num = arr[i];
     } else {
      num = undefined;
     }
   }
   return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);