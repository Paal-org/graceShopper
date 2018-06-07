const router = require('express').Router();
const { Order, Product, Category, LineItem } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const userOrders = await Order.findOne({
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

router.post('/', async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: { userId: req.user.id, status: 'cart' },
    });
    if (userOrder) {
      const lineItem = await LineItem.create({
        orderId: userOrder.id,
        productId: req.body.id,
      });
      res.json(req.body);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//use query to see current cart vs. complete

module.exports = router;
