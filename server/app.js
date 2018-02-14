const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('env2')('config.env');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on('error', err => {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
  app.listen(port, () => {
    console.log(`App listening on http://${host}:${port}`);
  });
});

process.on('unhandledRejection', up => {
  throw up;
}); //in Node 8.2.1 if theres an error, the errors will not crash the program. Instead a warning is printed..so this code
// is here in order for that warning to go away and showing the error like usual

// Express will serve up production assets
// like our main.js file, or main.css file!
app.use('/api', reportRoutes);
app.use(express.static('client/build'));

// Express will serve up the index.html file
// if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});
