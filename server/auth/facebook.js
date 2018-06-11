const passport = require('passport');
const router = require('express').Router();
const FacebookStrategy = require('passport-facebook');
const { User } = require('../db/models');
const { fbClientId, fbClientSecret, fcClientCallback } = require('../../secrets');
module.exports = router;

if (!process.env.FACEBOOK_APP_ID || !process.env.FACEBOOK_APP_SECRET) {
  console.log('Facebook client ID / secret not found. Skipping Google OAuth.');
} else {
  const facebookConfig = {
    clientID: fbClientId,
    clientSecret: fbClientSecret,
    callbackURL: fcClientCallback,
  };

  // profileFields: ['id', 'displayName', 'photos', 'email']
  const stratergy = new FacebookStrategy(
    facebookConfig,
    async (accessToken, refreshToken, profile, done) => {
      const facebookId = profile.id;
      const email = profile.emails[0].value;
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName;

      const foundUser = await User.find({ where: { facebookId } });
      const createdUser = foundUser
        ? done(null, foundUser)
        : await User.create({ firstName, lastName, email, facebookId });
      await createdUser.createCart();
      done(null, createdUser).catch(done);
    }
  );

  passport.use(stratergy);

  router.get('/', passport.authenticate('facebook', { scope: 'email' }));

  router.get(
    '/callback',
    passport.authenticate('facebook', {
      successRedirect: '/home',
      failureRedirect: '/login',
    })
  );
}
