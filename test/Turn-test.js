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
    expect(turn.card).to.deep.equal(card);
  });

  it.skip('should be able return the user\'s guess', function() {
    const card = new Card();
    const turn = new Turn('opera', card);
    expect(turn.returnGuess()).to.equal('opera');
  });

  it.skip('should be able return the card', function() {
    const card = new Card();
    const turn = new Turn('opera', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should be able to check if user\'s guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of relate information using key-value pairs?', ['object','array','function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });
});
