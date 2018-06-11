const router = require('express').Router();
const { Order } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const pendingOrders = await Order.findAll({
      where: { shippingStatus: 'pending' },
      include: [{ all: true }],
    });
    res.json(pendingOrders);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
