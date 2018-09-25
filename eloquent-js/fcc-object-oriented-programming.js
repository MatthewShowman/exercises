
// Extend Constructors to Receive Arguments
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  
  let terrier = new Dog('Scots', 'grey');
  console.log(terrier);




  // Understand Own Properties

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }

  console.log(ownProps);
  
  


  // Inherit Behaviors from a Supertype

  function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle= Object.create(Animal.prototype); // Change this line

console.log(duck);
console.log(beagle);
duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 