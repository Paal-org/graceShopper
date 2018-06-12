const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const User = db.model('user');
const Order = db.model('order');
const LineItem = db.model('lineItem');
const Product = db.model('product');

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('get req.user.id to carry the tests', function() {
    var token;
    before(function(done) {
      request
        .post('/auth/login')
        .send({
          email: 'test@user.com',
          password: 'password',
        })
        .end(function(err, res) {
          if (err) throw err;
          token = { access_token: res.body.token };
          done();
        });

      describe('/api/cart/', () => {
        beforeEach(async () => {
          const cody = await User.create({
            email: 'cody@email.com',
            firstName: 'Cody',
            lastName: 'Murphy',
          });
          const order = Order.create({
            status: 'cart',
            userId: cody.id,
          });
          const product = Product.create({
            name: 'Yummy Beer',
            description: 'a great beer to drink',
            price: '700',
          });
          const lineItem = LineItem.create({
            purchaseQuantity: 3,
            orderId: order.id,
            productId: product.id,
          });
        });
      });

      it('GET /api/cart', () => {
        return request(app)
          .get('/api/cart')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.be.equal(1);
            expect(res.body.products[0].name).to.be.equal('Yummy Beer');
          });
      });
    });
  });
});
