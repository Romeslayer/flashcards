const expect = require('chai').expect;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data').prototypeData;

describe('Game', () => {

  it.skip('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it.skip('should instantiate a Game', () => {
    const game = new Game(data);
    expect(game).to.be.an.instanceof(Game);
  });

  describe('start()', () => {

    it.skip('creates Cards and puts them in a Deck', () => {
      const game = new Game(data);
      expect(game.deck).to.be.an.instanceof(Deck);
      expect(game.deck.cards[0]).to.be.an.instanceof(Card);
    });

    it.skip('creates Cards from data', () => {
      const game = new Game(data);
      const testCard = new Card(data[0]);
      expect(game.deck.cards[0]).to.be.deep.equal(testCard);
      expect(game.deck.cards.length).to.be.equal(testCard);
    })
  });

  it.skip('should create an instance of the round', () => {
    const game = new Game(data);
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it.skip('should create the correct instance of the round', () => {
    const game = new Game(data);
    const testCard = new Card(data[0]);
    const testDeck = new Deck([testCard]);
    const testRound = new Round(testDeck);
    expect(game.currentRound).to.be.deep.equal(testRound);
  });
});
