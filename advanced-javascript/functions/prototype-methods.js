function sum (c, d) {
    return this.a + this.b + c + d;
}

let myObj = {
    a: 1,
    b: 2,
}


console.log(sum.call(myObj, 3, 4));
console.log(sum.apply(myObj, [3, 4]));

let newFunc = sum.bind(myObj);
console.log(newFunc(3, 4));




// Practice 2.0 Call

let person = {
    firstName: 'John',
    lastName: 'Doe',
    getFulllName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

function getFulllName() {
    return this.firstName + ' ' + this.lastName;
}
// This is essentially the same FUNCTIONALLY, the oly difference is how it gets called (see below)


person.getFulllName(); // returns 'John Doe'


let newPerson = {
    firstName: 'Jane',
    lastName: 'Doe',
}

console.log(person.getFulllName.call(newPerson));
console.log(getFulllName.call(newPerson));

// Practice 2.0 Bind
let secondFunc = person.getFulllName.bind(newPerson);
console.log(secondFunc());





// Practice 3.0


function addTwo() {
    console.log(this.num + 2);
}

// Call the above function so that it prints out 10

let myNum = {
    num: 8,
}

addTwo.call(myNum);

// OR

addTwo.call({ num: 8 });