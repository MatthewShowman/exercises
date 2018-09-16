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
  //console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  //console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
  //console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
  //console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));




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

  //console.log(myNestedArray[1][6][0]);
  //console.log(myNestedArray[2][5][0][0]);
  //console.log(myNestedArray[3][5][0][0][1]);



  // Access Property Names with Bracket Notation
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // do not change code above this line
  
  function checkInventory(scannedItem) {
    return foods[scannedItem];
    
    // change code below this line
  
  }

  // change code below this line to test different cases:
  //console.log(checkInventory("plums"));




  // Iterate Through the Keys of an Object with a for...in Statement
  
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  
  function countOnline(obj) {
    // change code below this line
    let numUsers = 0;
    for (let person in obj) {
      if (person['online'] == true) {
        numUsers += 1;
      }
      
      return numUsers;
    }

    // change code above this line
  }
  
  console.log(countOnline(users));
  console.log(users);
