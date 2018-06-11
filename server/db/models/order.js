const Sequelize = require('sequelize');
const db = require('../db');
const LineItem = require('./lineItem');

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('cart', 'complete'),
    defaultValue: 'cart',
  },
  shippingStatus: {
    type: Sequelize.ENUM('pending', 'shipped'),
    defaultValue: null,
  },
});

Order.prototype.totalCartItems = function() {
  const cartList = LineItem.findAll({
    where: {
      orderId: this.id,
    },
  });
  return cartList
    .map(item => item.purchaseQuantity)
    .reduce((total, num) => total + num, 0);
};

module.exports = Order;
