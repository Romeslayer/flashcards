const Turn = require('./Turn');

class Round {
  constructor(deck) {
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

  calculatePercentCorrect = () => Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);

  endRound = () => `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
}

module.exports = Round;
