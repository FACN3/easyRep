require('env2')('config.env');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const logger = require('morgan');
const reportRouter = require('./routes/reportRoutes');
const authRouter = require('./routes/authRoutes');
require('./models/Users');

const User = mongoose.model('user');

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

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
    callbackURL: "http://localhost:5000/auth/facebook/callback",
    proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({strategy: profile.provider, auth_id: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({strategy: profile.provider, auth_id: profile.id}).save();
      done(null, user);
  }
 )
);

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on('error', err => {
  console.log('Mongoose default connection error: ' + err);
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use('/api', reportRouter);
  app.use('/auth', authRouter);
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
} else {
  app.use('/api', reportRouter);
  app.use('/auth', authRouter);
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
  app.listen(port, () => {
    console.log(`App listening on http://${host}:${port}`);
  });
});
