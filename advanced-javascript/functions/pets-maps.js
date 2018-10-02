let pets = [
    { name: 'Sprinkles', type: 'dog' },
    { name: 'Reece', type: 'dog' },
    { name: 'Pukes-a-lot', type: 'cat' },
    { name: 'Not-a-real-pet', type: 'cat' },
    { name: 'Fluffykins', type: 'dog' },
    { name: 'Ugly', type: 'cat' }
  ];
  
  let dogs = pets.map(function(element) {
    if (element.type === 'dog') {
        element.isPrecious = true;
    } else {
        element.isPrecious = false;
    }
    return element;
  });

  console.log(dogs);



  // OR



  let allDogsArePrecious = function(element) {
    if (element.type === 'dog') {
        element.isPrecious = true;
    } else {
        element.isPrecious = false;
    }
    return element;
}

let preciousDogs = pets.map(allDogsArePrecious);
console.log(preciousDogs);



// UpperCase

let upperCasePets = pets.map(function(pet) {
    pet.name = pet.name.toUpperCase();
    return pet;
});

console.log(upperCasePets);