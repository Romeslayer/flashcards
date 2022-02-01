const expect = require('chai').expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able return the user\'s guess', function() {
    const card = new Card();
    const turn = new Turn('opera', card);
    expect(turn.returnGuess()).to.equal('opera');
  });

  it('should be able return the card', function() {
    const card = new Card();
    const turn = new Turn('opera', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to check if user\'s guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to check if user\'s guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card)
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should be able to say if guess is correct or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('function', card);
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    const turn2 = new Turn('object', card);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
