class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`; // interpolated
    }

    get fullName() { // Getters can be useful when we want to manipulate the output
        return `${this.firstName} ${this.lastName}`;
    }

    get capsName() { // Getters DO NOT take arguments
        return this.firstName.toUpperCase();
    }

    set name(name) {
        let names = name.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

let joe = new Person('Joe', 'Schmoe');
console.log(joe.getFullName());
console.log(joe.fullName);
console.log(joe.capsName);

joe.name = "Joseph Schoeseph";
console.log(joe.firstName);
console.log(joe.lastName);