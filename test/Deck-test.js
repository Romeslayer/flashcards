const expect = require('chai').expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  it.skip('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should hold Cards', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(1, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(1, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.be.deep.equal([card1, card2, card3]);
  });

  it.skip('should know how many cards are in the Deck', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(1, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(1, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards).to.be.equal(3);
  })
});
