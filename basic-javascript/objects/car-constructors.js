// Be able to create a new car again and again with a make and color

function Car(make, color) { //This is like a "blueprint" from which many cars can be created
    this.make = make;
    this.color = color;
    this.started = false;
}

Car.prototype.start2 = function() {
    this.started = true;
}

Car.prototype.stop = function() {
    this.started = false;
}

// This will not allow the called method below to method the Array class
Car.prototype.toString = function() {
    return this.make + " " + this.started;
}

//call new
// 1. Creates new empty object
// 2. Assigns this to the new empty object
// 3. Executes the body of the constructor function

let myCar = new Car('Volkwagon', 'blue'); //makes let myCar = {make; 'Volkswagon', model: 'blue',};
let myCar2 = new Car('Toyota', 'white');
myCar.spoiler = true;
console.log(myCar); 
console.log(myCar2); 

// myCar.spoiler = true;
// console.log(myCar.spoiler);

myCar.start2();
console.log(myCar.started);
console.log(myCar.toString());