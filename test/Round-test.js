const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {

  it.skip('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });
});
