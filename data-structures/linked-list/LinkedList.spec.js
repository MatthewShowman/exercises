const LinkedList = require('./LinkedList')
const assert = require('assert');

it('New list should have a length of 0', (done) => {
    let myList = new LinkedList();
    
    assert.strictEqual(myList.length, 0);
    done();
});

it('Should add a new element to the linked list', (done) => {
    let myList = new LinkedList();
    
    myList.add({ name: 'Bob' });
    let currentLength = myList.length;
    myList.add({ name: 'Jane' }); 
    
    assert.strictEqual(myList.length, currentLength + 1);
    assert.strictEqual(myList._head.value.name, 'Jane');
    done();
});

it('Should remove the head node', (done) => {
    let myList = new LinkedList();
    myList.add({ name: 'Sally' });
    myList.add({ name: 'Jim' });
    let removedValue = myList.removeHead();

    assert.strictEqual(myList.length, 1);
    assert.deepEqual(removedValue, { name: 'Jim' });
    done();
});

it('Should search for a value', (done) => {
    let myList = new LinkedList();
    myList.add({ name: 'Sally' });
    myList.add({ name: 'Jim' });
    myList.add({ name: 'Bob' });

    let position = myList.search('Sally');

    assert.strictEqual(position, 2);
    done();
 });

 it('Should return null for a value that does not exist', (done) => {
    let myList = new LinkedList();
    myList.add({ name: 'Sally' });
    myList.add({ name: 'Jim' });
    myList.add({ name: 'Bob' });

    let position = myList.search('Isaac');

    assert.strictEqual(position, null);
    done();
 });