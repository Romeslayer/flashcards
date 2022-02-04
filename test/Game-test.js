const expect = require('chai').expect;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data').prototypeData;

describe('Game', () => {

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should instantiate a Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to keep track of the current round', () => {
    expect(game.currentRound).to.be.deep.equal({})
  });
});
