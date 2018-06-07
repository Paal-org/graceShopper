const router = require('express').Router();
const { Order } = require('../db/models');

router.get('/:userId', async (req, res, next) => {
  try {
    const userOrders = await Order.findAll({
      where: { userId: req.params.userId },
      include: [{ all: true }],
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

module.exports = router;
