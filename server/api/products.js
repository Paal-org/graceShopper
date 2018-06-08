const router = require("express").Router();
const { Product, User, Review } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{ all: true }, { model: Review, include: [User] }]
    });

    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      price: req.body.price,
      inventoryQuantity: req.body.inventoryQuantity
    });
    const product = await Product.findById(newProduct.id, {
      include: [{ all: true }, { model: Review, include: [User] }]
    });
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
