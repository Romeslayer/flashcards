const expect = require('chai').expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data').prototypeData;

describe('Deck', () => {

  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should hold Cards', () => {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    expect(deck.cards).to.be.deep.equal(cards);
  });

  it('should know how many cards are in the Deck', () => {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    expect(deck.countCards()).to.be.equal(deck.cards.length);
  })
});
