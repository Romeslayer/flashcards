const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {

    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a guess', () => {
    expect(round.guess).to.be.equal('object');
  });

  it('should also store a Deck', () => {
    expect(round.deck).to.be.equal(deck);
  });

  it('should have a turn count thats 0 by default', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to return the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(round.deck.cards[0]);
  });



  it.skip('should be able to store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.equal([]);
  });

  describe('When a guess is made', () => {

    it.skip('guess is evaluated using Turns as correct', () => {
      let testRound = round;
      let result = testRound.takeTurn('object');
      expect(result).to.be.deep.equal('correct!');
    });

    it.skip('guess is evaluated using Turns as incorrect', () => {
      let testRound = round;
      let result = testRound.takeTurn('array');
      expect(result).to.be.deep.equal('incorrect!');
    });

    it.skip('incorrect guesses are recorded', () => {
      let testRound = round;
      testRound.takeTurn('array');
      expect(testRound.incorrectGuesses).to.deep.equal([1]);
    });

    it.skip('turns count is updated', () => {
      let testRound = round;
      testRound.takeTurn('object');
      expect(testRound.turns).to.be.deep.equal(1);
      testRound.takeTurn('object');
      expect(testRound.turns).to.be.deep.equal(2);
    });

    it.skip('updates the current card', () => {
      let testRound = round;
      testRound.takeTurn('object');
      expect(testRound.returnCurrentCard()).to.be.equal(testRound.deck.cards[1]);
    });
  });

  it.skip('should be able to calculate the percentage of correct guesses', () => {
    let testRound = round;
    testRound.takeTurn('object');
    testRound.takeTurn('array');
    testRound.takeTurn('function');
    expect(testRound.calculatePercentCorrect()).to.equal(100);
  });

  it.skip('should be able to calculate the percentage of other correct guesses', () => {
    let testRound = round;
    testRound.takeTurn('object');
    testRound.takeTurn('object');
    expect(testRound.calculatePercentCorrect()).to.equal(50);
  });

  it.skip('should be able to end the round', () => {
    let testRound = round;
    testRound.takeTurn('object');
    testRound.takeTurn('array');
    testRound.takeTurn('function');
    expect(testRound.endRound()).to.deep.equal('** Round over! ** You answered 100% of the questions correctly!');
  });

  it.skip('should be able to end a different round', () => {
    let testRound = round;
    testRound.takeTurn('object');
    testRound.takeTurn('object');
    testRound.takeTurn('function');
    expect(testRound.endRound()).to.deep.equal('** Round over! ** You answered 66% of the questions correctly!');
  });
});
