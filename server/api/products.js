const router = require('express').Router();
const { Product, User, Review } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{ all: true }, { model: Review, include: [User] }],
    });

    res.json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
