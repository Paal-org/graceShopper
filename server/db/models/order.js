const Sequelize = require('sequelize');
const db = require('../db');

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

module.exports = Order;
