import Module from '../../src/server/index.js';
import chai from 'chai';

describe('Export test', () => {
  it('hello() should return Hello World', () => {
    chai.assert.equal('Hello World!', new Module().hello());
  });
  it('hello2() works', () => {
    chai.assert.equal('Hello to you too!', Module.hello2());
  });
});
