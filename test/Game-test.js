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
});
