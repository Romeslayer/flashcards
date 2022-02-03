const expect = require('chai').expect;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data').prototypeData;

describe('Game', () => {

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should instantiate a Game', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should be able to keep track of the current round', () => {
    const game = new Game();
    expect(game.currentRound).to.be.equal({})
  })

  describe('start()', () => {

    it.skip('creates Cards and puts them in a Deck', () => {
      const game = new Game();
      game.start();
      expect(game.deck).to.be.an.instanceof(Deck);
      expect(game.deck.cards[0]).to.be.an.instanceof(Card);
    });

    it.skip('creates Cards from data', () => {
      const game = new Game();
      game.start();
      const testCard = new Card(data[0]);
      expect(game.deck.cards[0]).to.be.deep.equal(testCard);
      expect(game.deck.cards.length).to.be.equal(testCard);
    })
  });

  it.skip('should create an instance of the round', () => {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it.skip('should create the correct instance of the round', () => {
    const game = new Game();
    game.start()
    const testCard = new Card(data[0]);
    const testDeck = new Deck([testCard]);
    const testRound = new Round(testDeck);
    expect(game.currentRound).to.be.deep.equal(testRound);
  });
});
