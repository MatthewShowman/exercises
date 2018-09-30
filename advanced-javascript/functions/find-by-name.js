// Write a function called findByName that takes two parameters.
// The first parameter is an array of objects that contain a first and a last property.
// The second parameter is a first name.

function findByName(arr, firstName) {
    return arr.find(element => element.first === firstName);
}

let people = [
    { first: "Joe", last: "Montana" },
    { first: "Steve", last: "Young" },
    { first: "Troy", last: "Aikman" },
  ]
  
  console.log(findByName(people, "Steve"));