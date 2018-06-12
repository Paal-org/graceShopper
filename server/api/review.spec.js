const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Product = db.model('product');
const Review = db.model('review');

describe('Review routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('seeds product and review', () => {
    beforeEach(async () => {
      const blueMilk = await Product.create({
        name: 'Blue Milk',
        description:
          'Blue coloured bantha milk. Bantha is an animal, which lives on planet Tatooine.',
        price: 8,
      });
      await Review.create({
        rating: 3,
        content: 'This is such a great product',
        productId: blueMilk.id,
      });
      await Review.create({
        rating: 2,
        content: 'I didnt like it as much',
        productId: blueMilk.id,
      });
    });

    it('Eager load the reviews of the product', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body[0].reviews).to.be.an('array');
          expect(res.body[0].reviews.length).to.be.equal(2);
          expect(res.body[0].reviews[0].rating).to.be.equal(3);
        });
    });
  });
});

