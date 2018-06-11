const Sequelize = require('sequelize');
const db = require('../db');

const LineItem = db.define('lineItem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  purchasePrice: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  purchaseQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = LineItem;
