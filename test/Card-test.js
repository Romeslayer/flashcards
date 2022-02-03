const expect = require('chai').expect;
const data = require('../src/data').prototypeData;

const Card = require('../src/Card');

describe('Card', function() {

  beforeEach(() => {
    cardData = data[0];
    card = new Card(cardData);
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card.question).to.equal(cardData.question);
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(cardData.answers);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal(cardData.correctAnswer);
  });
});
