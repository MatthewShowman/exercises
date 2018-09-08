let dog = {
    name: "Clifford",
    weight: 1000,
    breed: "big red dog",
    good: true,
    puppies: ["Huey", "Dewey", "Louie"],
    owner: { 
        name: "Bob",
        age: 40,
    }
}

console.log("Name: " + dog.name);
console.log("Weight: " + dog.weight);
console.log("Breed: " + dog.breed);
console.log("Good: " + dog.good);
console.log("Puppies: " + dog.puppies[0], ", " + dog.puppies[1], ", " + dog.puppies[2]);
console.log("Owner: " + dog.owner.name);