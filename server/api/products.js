const router = require('express').Router();
const { Product } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{ all: true }],
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router