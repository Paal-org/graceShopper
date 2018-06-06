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
    defaultValue: null,
  },
});

module.exports = LineItem;
