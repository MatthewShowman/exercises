// Create person construct that takes a first name, last name, and age
// Create two instances of the person class
// Add behavior
// Add a new method

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.celebrateBirthday = function () {
        this.age++;
    }
}

let person1 = new Person('John', 'Doe', 39);
let person2 = new Person('Jane', 'Doe',  34);

console.log(person1);
console.log(person2);

person1.celebrateBirthday();
console.log(person1.age); // 40