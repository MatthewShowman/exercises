const Queue = require('./Queue');

let myQueue = new Queue();

myQueue.enqueue(8, 9, 10);

let myVar = myQueue.dequeue();
console.log(myVar);