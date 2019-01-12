const Stack = require('./Stack');

let myStack = new Stack();

myStack.push(1, 2, 3);

let myVar = myStack.pop();
console.log(myVar);