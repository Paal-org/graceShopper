const router = require('express').Router();
const { Order, Product, Category, LineItem } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: { userId: req.user.id, status: 'cart' },
      include: [{ all: true }, { model: Product, include: [Category] }],
    });
    if (userOrder) {
      res.json(userOrder);
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
        purchaseQuantity: req.body.purchaseQuantity,
        orderId: userOrder.id,
        productId: req.body.product.id,
      });

      const objToSend = Object.assign({ lineItem }, req.body.product);

      res.json(objToSend);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: { userId: req.user.id, status: 'cart' },
    });
    const lineItem = await LineItem.findOne({
      where: { orderId: userOrder.id, productId: req.body.product.id },
    });
    if (lineItem) {
      const updatedLineItem = await lineItem.update({
        purchaseQuantity: req.body.purchaseQuantity,
      });
      const objToSend = Object.assign({
        ...req.body.product,
        lineItem: updatedLineItem,
      });
      res.json(objToSend);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: { userId: req.user.id, status: 'cart' },
    });
    const lineItem = await LineItem.findOne({
      where: { orderId: userOrder.id, productId: req.params.id },
    });
    if (lineItem) {
      await lineItem.destroy();
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//use query to see current cart vs. complete

module.exports = router;
