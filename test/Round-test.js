const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

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
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);
  });

  it.skip('should have a turn count thats 0 by default', () => {
    expect(round.turns).to.equal(0);
  });

  it.skip('should be able to store incorrect guesses', () => {
      expect(round.incorrectGuesses).to.equal([]);
  });
});
