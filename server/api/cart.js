const router = require('express').Router();
const { Order, Product, Category } = require('../db/models');

router.get('/', async (req, res, next) => {
  console.log(req.user);
  try {
    const userOrders = await Order.findAll({
      where: { userId: req.user.id, status: 'cart' },
      include: [{ all: true }, { model: Product, include: [Category] }],
    });
    if (userOrders) {
      res.json(userOrders);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//use query to see current cart vs. complete

module.exports = router;
