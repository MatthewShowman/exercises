'use strict';
    // Prevents the creation of global variables / E.g. Will not allow "persom" below.
    // Prevents deletion of Object protoypes

let person;

person = {
    name: 'Joe',
};

console.log(person);

function sum(a, a) { // 'use strict' will not allow this to happen
    return a = a;
}