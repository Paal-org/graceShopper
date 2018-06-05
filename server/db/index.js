const db = require('./db');
const Product = require('./product');

// register models
require('./models');

module.exports = { db, Product };
