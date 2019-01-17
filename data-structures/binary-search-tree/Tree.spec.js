const assert = require('assert');
const Tree = require('./Tree');

let tree = new Tree(5);
tree.insert(3);
tree.insert(6);
tree.insert(1);
tree.insert(7);
tree.insert(8);
tree.insert(4);
tree.insert(10);
tree.insert(2);
tree.insert(9);


it(' Should implement insert', (done) => {
    assert.strictEqual(tree.value, 5);
    assert.strictEqual(tree.left.value, 3);
    assert.strictEqual(tree.right.value, 6);
    assert.strictEqual(tree.left.left.value, 1);
    done();
});

it(' Should implement contains', (done) => {
    assert.strictEqual(tree.contains(5), true);
    assert.strictEqual(tree.contains(3), true);
    assert.strictEqual(tree.contains(10), true);
    assert.strictEqual(tree.contains(11), false);
    assert.strictEqual(tree.contains(0), false);
    done();
});

it(' Should implement getMinValue', (done) => {
    assert.strictEqual(tree.getMinValue(), 1);
    done();
});

it(' Should implement getMaxValue', (done) => {
    assert.strictEqual(tree.getMaxValue(), 10);
    done();
});