const expect = require('chai').expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data').prototypeData;

describe('Deck', () => {

  beforeEach(() => {
    card1 = new Card(data[0]);
    card2 = new Card(data[1]);
    card3 = new Card(data[2]);
    cards = [card1, card2, card3];
    deck = new Deck(cards);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should hold Cards', () => {
    expect(deck.cards).to.be.deep.equal(cards);
  });

  it('should know how many cards are in the Deck', () => {
    expect(deck.countCards()).to.be.equal(deck.cards.length);
  })
});
