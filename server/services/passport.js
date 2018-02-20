require('env2')('config.env');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../models/Users');

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['email', 'profileUrl', 'displayName', 'picture.type(small)'],
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
