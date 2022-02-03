const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(card1.correctAnswer, deck);

    expect(round).to.be.an.instanceof(Round);
  });


  it('should also store a Deck', () => {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.deck).to.be.equal(deck);
  });

  it('should have a turn count thats 0 by default', () => {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
  });

  it('should be able to return the current card being played', () => {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(round.deck.cards[0]);
  });

  it('should be able to store incorrect guesses', () => {
    const card1 = new Card(data[0]);
    const card2 = new Card(data[1]);
    const card3 = new Card(data[2]);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  describe('When a guess is made', () => {

    it('guess is evaluated using Turns as correct', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);
      let result = round.takeTurn(data[0].correctAnswer);
      expect(result).to.be.deep.equal('correct!');
    });

    it('guess is evaluated using Turns as incorrect', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);
      let result = round.takeTurn('array');
      expect(result).to.be.deep.equal('incorrect!');
    });

    it('incorrect guesses are recorded', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);
      round.takeTurn('array');
      expect(round.incorrectGuesses).to.deep.equal([1]);
    });

    it('turns count is updated', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);

      round.takeTurn(card1.correctAnswer);
      expect(round.turns).to.be.deep.equal(1);
      round.takeTurn('object');
      expect(round.turns).to.be.deep.equal(2);
    });

    it('updates the current card', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);

      round.takeTurn(card1.correctAnswer);
      expect(round.returnCurrentCard()).to.be.equal(round.deck.cards[1]);
    });

    it('should be able to calculate the percentage of correct guesses', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);

      round.takeTurn(card1.correctAnswer);
      round.takeTurn(card2.correctAnswer);
      round.takeTurn(card3.correctAnswer);
      expect(round.calculatePercentCorrect()).to.equal(100);
    });

    it('should be able to calculate the percentage of other correct guesses', () => {
      const card1 = new Card(data[0]);
      const card2 = new Card(data[1]);
      const card3 = new Card(data[2]);
      const cards = [card1, card2, card3];
      const deck = new Deck(cards);
      const round = new Round(deck);
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
