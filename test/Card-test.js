const expect = require('chai').expect;
const data = require('../src/data').prototypeData;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card(data);
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const cardData = data[0];
    const card = new Card(cardData);
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    const cardData = data[0];
    const card = new Card(cardData);
    expect(card.question).to.equal(data[0].question);
  });

  it('should store a list of possible answers', function() {
    const cardData = data[0];
    const card = new Card(cardData);
    expect(card.answers).to.deep.equal(data[0].answers);
  });

  it('should store the correct answer', function() {
    const cardData = data[0];
    const card = new Card(cardData);
    expect(card.correctAnswer).to.equal(data[0].correctAnswer);
  });
});
