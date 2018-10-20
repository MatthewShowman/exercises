class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    drive() {
        console.log(`${this.model} goes vrooooom!`);
    }
}

let myCar = new Car('Toyota', 'Rav4', 2000); // an instance of the Car class (an "instantiation")
let newCar = new Car('Honda', 'Civic', 2006); // an instance of the Car class (an "instantiation")

console.log(myCar);
console.log(newCar);

myCar.drive();
newCar.drive();

myCar.parallelpark = () => {
    console.log("parallel parking now");
}
myCar.parallelpark();
// newCar.parallelpark(); //This throw and error because parallelpark() has not been added to the object;

// variable instanceof Object/Car

// inheritance

class SUV extends Car { // makes SUV a new class
    constructor(make, model, year, tires = 4) {
        super(make, model, year) // Takes from Car
        this.tires = tires;
    }

    drive () {
        console.log(`${this.model} goes VROOOOOOOOM!`);
    }
}

let mySUV = new SUV('Chevy', 'Suburban', 2007);

console.log(mySUV);
mySUV.drive();