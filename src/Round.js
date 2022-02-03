class Round {
  constructor(guess, deck) {
    this.guess = guess;
    this.deck = deck;
    this.turns = 0;
  }

  returnCurrentCard = () => this.deck.cards[this.turns];
}

module.exports = Round;
