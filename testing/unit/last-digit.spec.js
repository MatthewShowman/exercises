const assert = require('assert');
const lastDigit = require('./last-digit');

it('Should return true for 27 and 57', (done) => {
    let actual = lastDigit(27, 57);
    assert.strictEqual(actual, true);

    done();
});


it('Should return false for 28 and 43', (done) => {
    let actual = lastDigit(28, 43);
    assert.strictEqual(actual, false);

    done();
});