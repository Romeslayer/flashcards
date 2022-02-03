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
    if (!turn.evaluateGuess() ) this.incorrectGuesses.push(this.returnCurrentCard().id);
    this.turns++;
    return turn.giveFeedback();
  }
}

module.exports = Round;
