const expect = require('chai').expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store user\'s guess to the question', function() {
    const card = new Card();
    const turn = new Turn('opera', card);
    expect(turn.guess).to.equal('opera');
  });

  it.skip('should store current card', function() {
    const card = new Card();
    const turn = new Turn('opera', card);
    expect(turn.card).to.deep.equal(card)
  });
});
