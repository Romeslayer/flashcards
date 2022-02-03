const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a guess', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);

    expect(round.guess).to.be.equal('object');
  });

  it('should also store a Deck', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);

    expect(round.deck).to.be.equal(deck);
  });

  it('should have a turn count thats 0 by default', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);
    expect(round.turns).to.equal(0);
  });

  it('should be able to return the current card being played', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);
    expect(round.returnCurrentCard()).to.deep.equal(round.deck.cards[0]);
  });

  it('should be able to store incorrect guesses', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  describe('When a guess is made', () => {

    it('guess is evaluated using Turns as correct', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);
      let result = round.takeTurn('object');
      expect(result).to.be.deep.equal('correct!');
    });

    it('guess is evaluated using Turns as incorrect', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);
      let result = round.takeTurn('array');
      expect(result).to.be.deep.equal('incorrect!');
    });

    it('incorrect guesses are recorded', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);
      round.takeTurn('array');
      expect(round.incorrectGuesses).to.deep.equal([1]);
    });

    it('turns count is updated', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);

      round.takeTurn('object');
      expect(round.turns).to.be.deep.equal(1);
      round.takeTurn('object');
      expect(round.turns).to.be.deep.equal(2);
    });

    it.skip('updates the current card', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);

      round.takeTurn('object');
      expect(round.returnCurrentCard()).to.be.equal(round.deck.cards[1]);
    });

    it.skip('should be able to calculate the percentage of correct guesses', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);

      round.takeTurn('object');
      round.takeTurn('array');
      round.takeTurn('function');
      expect(round.calculatePercentCorrect()).to.equal(100);
    });

    it.skip('should be able to calculate the percentage of other correct guesses', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);
      round.takeTurn('object');
      round.takeTurn('object');
      expect(testRound.calculatePercentCorrect()).to.equal(50);
    });

    it.skip('should be able to end the round', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);
      round.takeTurn('object');
      round.takeTurn('array');
      round.takeTurn('function');
      expect(round.endRound()).to.deep.equal('** Round over! ** You answered 100% of the questions correctly!');
    });

    it.skip('should be able to end a different round', () => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
      const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round('object', deck);
      round.takeTurn('object');
      round.takeTurn('object');
      round.takeTurn('function');
      expect(round.endRound()).to.deep.equal('** Round over! ** You answered 66% of the questions correctly!');
    });
  });
});
