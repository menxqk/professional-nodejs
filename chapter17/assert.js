var assert = require('assert');

var a = true;

assert(a, 'should be truthy');
assert.equal(a, true, 'should be truthy');
assert.equal('10', 10, 'should be equal');

var a = new Date();
var b = new Date();
assert.deepEqual(a, b);
