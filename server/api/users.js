const router = require('express').Router();
const { User, Order, LineItem } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email'],
  })
    .then(users => res.json(users))
    .catch(next);
});

router.get('/account', (req, res, next) => {
  if(req.user) {
    User.findById(req.user.id, {
      include: [{ all: true }, { model: Order, include: [{ all: true }] }],
    })
      .then(eachUser => {
        res.json(eachUser);
      })
      .catch(next);
  }
});

