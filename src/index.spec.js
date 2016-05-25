var module = require('./index.js');
var assert = require('chai').assert;

describe('Export test', function() {
  it('hello() should return Hello World', function() {
    assert.equal(module.hello(), 'Hello World!');
  });
});
