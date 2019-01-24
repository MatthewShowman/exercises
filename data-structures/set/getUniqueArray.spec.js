const getUniqueArray = require('./getUniqueArray');
const assert = require('assert');

it('SHould return an array of unique values', (done) => {
    let output = getUniqueArray([1, 2, 2, 3, 3, 1]);
    assert.deepEqual(output, [1, 2, 3]);    
    done();
});
