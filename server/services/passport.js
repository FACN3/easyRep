require('env2')('config.env');
// const keys = require('../config/keys');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const mongoose = require('mongoose');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: '/auth/facebook/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken:', accessToken, 'refreshToken:', refreshToken);
      User.findOne({ strategy: profile.provider, auth_id: profile.id }).then(
        existingUser => {
          if (existingUser) {
            return done(null, existingUser);
          }
          new User({ strategy: profile.provider, auth_id: profile.id })
            .save()
            .then(user => done(null, user));
        }
      );
    }
  )
);
