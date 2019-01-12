const Queue = require('./Queue')
const assert = require('assert');

it("should return null if the queue is empty", (done) => {
    let emptyQueue = new  Queue();
    
    let myVar = emptyQueue.dequeue();
    assert.strictEqual(myVar, null);
    done();
});

it("Should dequeue items from the right", (done) => {
    let myQueue = new  Queue();
    myQueue.enqueue(1, 2);

    let myVar = myQueue.dequeue();
    assert.strictEqual(myVar, 1);
    done();
});
