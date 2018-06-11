const router = require('express').Router();
const User = require('../db/models/user');
module.exports = router;

router.post('/login', (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        console.log('No such user found:', req.body.email);
        res.status(401).send('Wrong username and/or password');
      } else if (!user.correctPassword(req.body.password)) {
        console.log('Incorrect password for user:', req.body.email);
        res.status(401).send('Wrong username and/or password');
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(next);
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    await user.createCart();
    req.login(user, err => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/me', (req, res) => {
  if (!req.user) {
    req.session.cart = { id: req.session.id, products: [] };
  }
  console.log('req.session', req.session);
  console.log('req.user', req.user);
  res.json(req.user);
});

router.use('/google', require('./google'));
router.use('/facebook', require('./facebook'));
