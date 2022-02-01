class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess = () => this.guess;
  returnCard = () => this.card;

  evaluateGuess = () => {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    };
  }
}

module.exports = Turn;
