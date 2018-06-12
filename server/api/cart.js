const router = require("express").Router();
const { Order, Product, Category, LineItem } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      const userOrder = await Order.findOne({
        where: { userId: req.user.id, status: "cart" },
        include: [{ all: true }, { model: Product, include: [Category] }]
      });
      res.json(userOrder);
    } else {
      res.json(req.session.cart);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (req.user) {
      const userOrder = await Order.findOne({
        where: { userId: req.user.id, status: "cart" }
      });
      const lineItem = await LineItem.create({
        purchaseQuantity: req.body.purchaseQuantity,
        orderId: userOrder.id,
        productId: req.body.product.id
      });

      const objToSend = Object.assign({ lineItem }, req.body.product);

      res.json(objToSend);
    } else {
      req.session.cart.products.push(req.body.product);

      const lineItem = {
        purchaseQuantity: req.body.purchaseQuantity,
        // orderId: userOrder.id,
        productId: req.body.product.id
      };
      const objToSend = Object.assign({ lineItem }, req.body.product);

      res.json(objToSend);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    if (req.user) {
      const userOrder = await Order.findOne({
        where: { userId: req.user.id, status: "cart" }
      });
      const lineItem = await LineItem.findOne({
        where: { orderId: userOrder.id, productId: req.body.product.id }
      });
      const updatedLineItem = await lineItem.update({
        purchaseQuantity: req.body.purchaseQuantity
      });
      const objToSend = Object.assign({
        ...req.body.product,
        lineItem: updatedLineItem
      });
      res.json(objToSend);
    } else {
      console.log("req.body cart put route", req.body);
      const updatedProduct = req.body.product;

      const existingCart = req.session.cart.products;
      let filteredCart = existingCart.filter(
        cartItem => cartItem.id !== updatedProduct.id
      );
      const updatedCart = [...filteredCart, updatedProduct];
      req.session.cart.products = updatedCart;
      const lineItem = {
        purchaseQuantity: req.body.purchaseQuantity, // orderId: userOrder.id,
        productId: req.body.product.id
      };
      // filteredCart.lineItem.purchaseQuantity = req.body.purchaseQuantity;
      const objToSend = Object.assign({
        ...req.body.product,
        lineItem
      });
      res.json(objToSend);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    if (req.user) {
      const userOrder = await Order.findOne({
        where: { userId: req.user.id, status: "cart" }
      });
      const lineItem = await LineItem.findOne({
        where: { orderId: userOrder.id, productId: req.params.id }
      });
      await lineItem.destroy();
      res.sendStatus(204);
    } else {
      const id = req.params.id;
      const existingCart = req.session.cart.products;
      existingCart.filter(cartItem => cartItem.id === id);
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
});

//use query to see current cart vs. complete

module.exports = router;
