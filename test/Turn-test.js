const expect = require('chai').expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
});
