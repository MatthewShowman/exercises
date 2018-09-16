// Setup

/*
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (prop === "tracks" && value  !== "") {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop]=[value];
    }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop]
  }

  return collection;
}

// Alter values below to test your code

console.log(collection);
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2548, "artist", "");
updateRecords(2548, "tracks", "");
updateRecords(1245, "album", "Riptide");
updateRecords(2468, "tracks", "Free");
console.log(collection);



/// Nesting for Loops

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    
    for (let i=0; i < arr.length; i++) {
      for (let j=0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
  
    // Only change code above this line
    }
    return product;
}
  
  // Modify values below to test your code
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
console.log(multiplyAll([[1],[2],[3]]));
console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]));
console.log(multiplyAll([[7,3],[2]]));



// Profile Lookup
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i]["firstName"] === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        } 
    }
    return "No such contact";

// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));
*/



//Multiple Conditional (Ternary) Operators

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

console. log(checkSign(10));
console. log(checkSign(-12));
console. log(checkSign(0));