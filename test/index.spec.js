import module from '../src/index.js';
import chai from 'chai';

describe('Export test', function() {
  it('hello() should return Hello World', function() {
    chai.assert.equal('Hello World!', new module().hello());
  });
  it('hello2() works', function() {
    chai.assert.equal('Hello to you too!', module.hello2());
  });
});
