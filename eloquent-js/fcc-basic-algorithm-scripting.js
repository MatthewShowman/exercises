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

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); //undefined

function findElement(arr, func) {
   let num = 0;
   for (let i = 0; i < arr.length; i++) {
     if (func(arr[i])) {
      num = arr[i];
      break;
     }
   }
   if (num === 0) {
     num = undefined;
   }
   return num;
}




// Title Case a Sentence 1.0

function titleCase(str) {

   let stringArray = str.split(" ");

   for (let i = 0; i < stringArray.length; i++) {
    let stringItem = stringArray[i]
    stringItem = stringItem.substring(0,1).toUpperCase() + stringItem.substring(1).toLowerCase();
    stringArray[i] = stringItem;
   }
  str = stringArray.join(" ");
  return str;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));





// Title Case a Sentence 2.0

function titleCaseB(str) {

  let stringArray = str.split(" ");

  for (let i = 0; i < stringArray.length; i++) {
   let stringItem = stringArray[i].substring(0,1).toUpperCase() + stringArray[i].substring(1).toLowerCase();
   stringArray[i] = stringItem;
  }
 str = stringArray.join(" ");
 return str;
}

console.log(titleCaseB("I'm a little tea pot"));
console.log(titleCaseB("sHoRt AnD sToUt"));
console.log(titleCaseB("HERE IS MY HANDLE HERE IS MY SPOUT"));





// Slice and Splice 1.0

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let frankenArray = arr2.splice();
  
  for( let i = 0; i < arr1.length; i++) {  
  let inner = arr1[i];
    frankenArray.splice(n + i, 0, inner);
  }
  return frankenArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // Output [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // Output ["a", 1, 2, "b"]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // Output ["head", "shoulders", "claw", "tentacle", "knees", "toes"]





// Slice and Splice 2.0

function frankenSpliceB(arr1, arr2, n) {
  // It's alive. It's alive!
  let frankenArray = Array.from(arr2);
  
  for( let i = 0; i < arr1.length; i++) {  
  let inner = arr1[i];
    frankenArray.splice(n + i, 0, inner);
  }
  return frankenArray;
}

console.log(frankenSpliceB([1, 2, 3], [4, 5], 1)); // Output [4, 1, 2, 3, 5]
console.log(frankenSpliceB([1, 2], ["a", "b"], 1)); // Output ["a", 1, 2, "b"]
console.log(frankenSpliceB(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // Output ["head", "shoulders", "claw", "tentacle", "knees", "toes"]




// Falsy Bouncer 1.0
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN
// Hint: Try converting each value to a Boolean


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9])) // return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])) // return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])) // return [].
console.log(bouncer([1, null, NaN, 2, undefined])) // return [1, 2]




// Where do I Belong 1.0
// Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  function compareNumbers(a, b) {
    return a - b;
  }
  arr.sort(compareNumbers);
 
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // return 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // return 2.
console.log(getIndexToIns([3, 10, 5], 3)); // return 0
console.log(getIndexToIns([], 1));  // return 0




// Mutations
// Return true if the string in the first element of the array
// contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  // convert both strings in the array to lowercase strings
  let firstString = arr[0].toLowerCase();
  let secondString = arr[1].toLowerCase();
  let charTest = true;
  
  
  for (let i = 0; i < secondString.length; i++) {
    for (let j = 0; j < firstString.length; j++) {
      if (secondString[i] !== firstString[j]) {
        charTest = false;
      }
    }
  }

  return charTest;
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])) // true

