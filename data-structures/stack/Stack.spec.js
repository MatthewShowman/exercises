const Stack = require('./Stack')
const assert = require('assert');

it('Should return the last item added to the array', (done) => {
    let myStack = new Stack();
    myStack.push(2, 4, 6);

    let myVar = myStack.pop();
    assert.strictEqual(myVar, 6);
    done();
});

it('Should not return the first item added to an array', (done) => {
    let falseStack = new Stack();
    falseStack.push(2, 4, 6);

    let myVar = falseStack.pop();
    assert.notEqual(myVar, 2);
    assert.notEqual(myVar, 4);
    done();
});