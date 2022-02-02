const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', () => {

  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);
  });

  it.skip('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should store a guess', () => {
    expect(round.guess).to.be.equal('object');
  });

  it.skip('should also store a Deck', () => {
    expect(round.deck).to.be.equal(deck);
  });

  it.skip('should be able to return the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(round.deck.cards[0]);
  });

  it.skip('should have a turn count thats 0 by default', () => {
    expect(round.turns).to.equal(0);
  });

  it.skip('should be able to store incorrect guesses', () => {
      expect(round.incorrectGuesses).to.equal([]);
  });

  describe('When a guess is made', () => {

    beforeEach(() => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);
    });

    it.skip('guess is evaluated using Turns as correct', () => {
      let result = round.takeTurn('object');
      expect(result).to.be.deep.equal('correct!');
    });

    it.skip('guess is evaluated using Turns as incorrect', () => {
      let result = round.takeTurn('array');
      expect(result).to.be.deep.equal('incorrect!');
    });

    it.skip('incorrect guesses are recorded', () => {
      round.takeTurn('array');
      expect(round.incorrectGuesses).to.deep.equal([1]);
    });

    it.skip('turns count is updated', () => {
      round.takeTurn('object');
      expect(round.turns).to.be.deep.equal(1);
      round.takeTurn('object');
      expect(round.turns).to.be.deep.equal(2);
    });

    it.skip('updates the current card', () => {
      round.takeTurn('object');
      expect(round.returnCurrentCard()).to.be.equal(round.deck.cards[1]);
    });
  });

  it.skip('should be able to calculate the percentage of correct guesses', () => {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('function');
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it.skip('should be able to calculate the percentage of other correct guesses', () => {
    round.takeTurn('object');
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.skip('should be able to end the round', () => {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('function');
    expect(round.endRound()).to.deep.equal('** Round over! ** You answered 100% of the questions correctly!');
  });

  it.skip('should be able to end a different round', () => {
    round.takeTurn('object');
    round.takeTurn('object');
    round.takeTurn('function');
    expect(round.endRound()).to.deep.equal('** Round over! ** You answered 66% of the questions correctly!');
  });
});
