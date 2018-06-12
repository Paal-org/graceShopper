const router = require('express').Router();
const { Order, User, Category, Product } = require('../db/models');
//import

router.put('/', async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: { id: req.body.id },
      include: [{ all: true }, { model: Product, include: [Category] }],
    });
    const currentUser = await User.findOne({
      where: { id: req.user.id },
    });
    const updatedOrder = await userOrder.update({
      status: 'complete',
      shippingStatus: 'pending',
    });
    const newCart = await currentUser.createCart();
    res.json({ updatedOrder, newCart });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
