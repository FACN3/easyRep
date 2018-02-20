require('env2')('config.env');
// const keys = require('./config/keys');
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
require('./services/passport');

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: 'secret'
  })
);

app.use(passport.initialize());
app.use(passport.session());

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
