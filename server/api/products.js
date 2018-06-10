const router = require('express').Router();
const { Product, User, Review, Category } = require('../db/models');

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

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      price: req.body.price,
      inventoryQuantity: req.body.inventoryQuantity,
      categoryId: req.body.categoryId,
    });
    const product = await Product.findById(newProduct.id, {
      include: [
        { all: true },
        { model: Category },
        { model: Review, include: [User] },
      ],
    });
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id, {
      include: [
        { all: true },
        { model: Category },
        { model: Review, include: [User] },
      ],
    });
    product.update(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/:id/review', async (req, res, next) => {
  try {
    await Review.create({
      userId: req.user.id,
      productId: req.params.id,
      rating: req.body.rating,
      content: req.body.content,
    });
    const reviewUser = await User.findById(req.user.id);
    const objToSend = {
      user: reviewUser,
      userId: req.user.id,
      productId: req.params.id,
      rating: req.body.rating,
      content: req.body.content,
    };
    res.json(objToSend);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
