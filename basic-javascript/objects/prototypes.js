// Explore the functionality built into JS

String.prototype.toAlternateCase = function() {
    let newString = "";

    for (let i = 0; i < this.length; i++) {
        
        let ascii = this.charCodeAt(i);

        if (ascii >= 65 && ascii <= 90) { // If char is uppercase, make it lowercase.
            newString += this[i].toLowerCase();
        } else if (ascii >= 97 && ascii <= 122) {// If char is lowercase, make it uppercase.
            newString += this[i].toUpperCase();
        } else {  // If char is not a letter, print it as is.
            newString += this[i];
        }
    }
    return newString;
}

console.log('hello WORLD'.toUpperCase()); // 'HELLO WORD'
console.log('hello WORLD'.toLowerCase()); // 'hello world'
console.log('hello WORLD'.toAlternateCase());      // HELLO world




// Array within an object. Use a function ion the array

function Pizza() {
    this.toppings = [];
}

Pizza.prototype.makeGross = function () {
    for (let i = 0; i < this.toppings.length; i++) {
        this.toppings[i] = 'olives';
    }
};

let pepperoniPizza = new Pizza();
pepperoniPizza.toppings.push('pepperoni');
pepperoniPizza.toppings.push('cheese');
console.log(pepperoniPizza);
console.log(pepperoniPizza.toppings);
pepperoniPizza.makeGross();
console.log(pepperoniPizza.toppings);

