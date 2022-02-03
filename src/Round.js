const Turn = require('./Turn');

class Round {
  constructor(guess, deck) {
    this.guess = guess;
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => this.deck.cards[this.turns];

  takeTurn = (guess) => {
    const turn = new Turn(guess, this.returnCurrentCard());
    return turn.giveFeedback();
  }
}

module.exports = Round;
