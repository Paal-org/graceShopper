const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.cornerstone-hw.com/wp-content/uploads/2018/02/example-1prdct1.png',
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    // set(valueToBeSet) {
    //   this.setDataValue('price', valueToBeSet / 100);
    // },
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Product;
