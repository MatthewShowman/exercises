// E.g. 1  --  Even numbers

let numbers = [1, 2, 3, 4, 5, 6]  // [2, 4, 6]

let evens = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evens);




// E.g. 2  --  word length

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result = words.filter(function(word) {
    return word.length > 6;
});

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]




// just get the dogs
let pets = [
    { name: 'Sprinkles', type: 'dog' },
    { name: 'Reece', type: 'dog' },
    { name: 'Pukes-a-lot', type: 'cat' },
    { name: 'Not-a-real-pet', type: 'cat' },
    { name: 'Fluffykins', type: 'dog' },
    { name: 'Ugly', type: 'cat' }
  ];

  let onlyDogs = pets.filter(function(pet){
    return pet.type === 'dog';
  });

  let dogsOnly = pets.filter(pet => pet.type === 'dog');

console.log(onlyDogs);
console.log(dogsOnly);




// findByName
// two parameters: an array of peoplem and a first name
//return all of the people with the specified first name


let people = [
    {first: 'Joe', last: 'Montana'},
    {first: 'Steve', last: 'Young'},
    {first: 'Troy', last: 'Aikman'},
    {first: 'Steve', last: 'McNair'},
];

function findByName(nameArray, firstName) {
    let nameSearch = nameArray.filter(name => name.first === firstName);
    return nameSearch;
}

console.log(findByName(people,'Steve')); // [{first "Steve", last: "Young"}]


