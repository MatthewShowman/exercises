  // 

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    let elemCheck;
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length-1; j >= 0; j--) {
          //Check to see if elem is included in the inner array.
          if (arr[i][j] == elem) {
              elemCheck = true;
              break;
          } else {
              elemCheck = false;
          }
        }

        if (elemCheck === false) {
            newArr.push(arr[i]);
        }  
    }
    // change code above this line
    return newArr;
}
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
  console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));




  // Create complex multi-dimensional arrays

  let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method',['deep']],
    ['concat', false, true, 'spread', 'array', [['deeper']]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [[[78, 'deepest']]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // change code above this line
  ];

  console.log(myNestedArray[1][6][0]);
  console.log(myNestedArray[2][5][0][0]);
  console.log(myNestedArray[3][5][0][0][1]);