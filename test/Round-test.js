const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data').prototypeData;

describe('Round', () => {

  beforeEach('setup', () => {
    card1 = new Card(data[0]);
    card2 = new Card(data[1]);
    card3 = new Card(data[2]);
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);

  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {

    expect(round).to.be.an.instanceof(Round);
  });


  it('should also store a Deck', () => {
    expect(round.deck).to.be.deep.equal(deck);
  });

  it('should have a turn count thats 0 by default', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to return the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(round.deck.cards[0]);
  });

  it('should be able to store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  describe('When a guess is made', () => {

    it('guess is evaluated using Turns as correct', () => {
      let result = round.takeTurn(data[0].correctAnswer);
      expect(result).to.be.deep.equal('correct!');
    });

    it('guess is evaluated using Turns as incorrect', () => {
      let result = round.takeTurn('array');
      expect(result).to.be.deep.equal('incorrect!');
    });

    it('incorrect guesses are recorded', () => {
      round.takeTurn('array');
      expect(round.incorrectGuesses).to.deep.equal([1]);
    });

    it('turns count is updated', () => {
      round.takeTurn(card1.correctAnswer);
      expect(round.turns).to.be.deep.equal(1);
      round.takeTurn('object');
      expect(round.turns).to.be.deep.equal(2);
    });

    it('updates the current card', () => {
      round.takeTurn(card1.correctAnswer);
      expect(round.returnCurrentCard()).to.be.equal(round.deck.cards[1]);
    });

    it('should be able to calculate the percentage of correct guesses', () => {
      round.takeTurn(card1.correctAnswer);
      round.takeTurn(card2.correctAnswer);
      round.takeTurn(card3.correctAnswer);
      expect(round.calculatePercentCorrect()).to.equal(100);
    });

    it('should be able to calculate the percentage of other correct guesses', () => {
      round.takeTurn(card1.correctAnswer);
      round.takeTurn('object');
      expect(round.calculatePercentCorrect()).to.equal(50);
    });

    it('should be able to end the round', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);
      round.takeTurn(card1.correctAnswer);
      round.takeTurn(card2.correctAnswer);
      round.takeTurn(card3.correctAnswer);
      expect(round.endRound()).to.deep.equal('** Round over! ** You answered 100% of the questions correctly!');
    });

    it('should be able to end a different round', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);
      round.takeTurn(card1.correctAnswer);
      round.takeTurn('object');
      round.takeTurn(card3.correctAnswer);
      expect(round.endRound()).to.deep.equal('** Round over! ** You answered 66% of the questions correctly!');
    });
  });
});
