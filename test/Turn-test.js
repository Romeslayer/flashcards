const expect = require('chai').expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data').prototypeData;

describe('Turn', function() {

  beforeEach(() => {
    card = new Card(data[0])
    turn = new Turn(card.correctAnswer, card)
  });

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able return the user\'s guess', function() {
    expect(turn.returnGuess()).to.equal(card.correctAnswer);
  });

  it('should be able return the card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to check if user\'s guess is correct', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to check if user\'s guess is incorrect', function() {
    const turn = new Turn('function', card)
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to say if guess is correct or not', function() {
    const turn1 = new Turn('function', card);
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    const turn2 = new Turn('object', card);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
