const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    validate: {
      len: {
        args: 15,
        msg: 'Tell us more, tell us more, did you like our product?',
      },
    },
  },
});

module.exports = Review;

