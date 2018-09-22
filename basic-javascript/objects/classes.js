class Car { // See the car-constructors.js to see an equivalent
    constructor(make, model) { // This is how a state is defined. Must use the word "constructor".
        this.make = make;
        this.model = model;
        this.started = false;
    }
    start() {
        this.started = true;
    }

    stop() {
        this.started = false;
    }

    toString() {
        return this.make + " " + this.started;
    }
}

// JS now puts this on the prototype for us.

let myCar = new Car("Volkswagon", "blue");
console.log(myCar);
myCar.start();
console.log(myCar);

console.log(myCar instanceof Car);
console.log(myCar instanceof Object);
console.log(myCar instanceof Array);




// create a 
class Vehicle {
    constructor(passengers, wheels) {
        this.passengers = passengers;
        this.wheels = wheels;
    }
    move() {
        console.log('Moving along on our ' + this.wheels + ' wheels.');
    }
};

// Make a subclass of Vehicle called Bicycle
class Bicycle extends Vehicle { // "extends" means that it inherits from the other class
    constructor() {
        super(1, 2); // Whatever the parent class contains
        this.pedals = 2;
    }
};

let bike = new Bicycle();
console.log(bike);
console.log(bike instanceof Vehicle);
console.log(bike instanceof Object);
bike.move();
