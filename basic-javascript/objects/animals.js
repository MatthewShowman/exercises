// Create a base class called Animal that takes a name in the constructor
/*
    - in Animals, create a speak method that outputs 'this.name makes a noise'
    - create a dog subclass
    - create a cat subclass
    - both should override the speak method

    -cat.speak() > 'this.name meows.'
    -dog.speak() > 'this.names barks.'
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return this.name + "s make noises.";
    }
}

class Dog extends Animal {
    speak() {
        return "A " + this.name + " barks.";
    }
}

class Cat extends Animal {
    speak() {
        return "A " + this.name + " meows.";
    }
}

console.log('');
let giraffe = new Animal('giraffe');
console.log(giraffe.speak());
console.log('');
let dog = new Dog('dog');
console.log(dog.speak());
console.log('');
let cat = new Cat('cat');
console.log(cat.speak());
console.log('');