const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('env2')('./config.env');
const reportRoutes = require('./routes/reportRoutes');

const port = 5000 || process.env.PORT;
const host = 'localhost' || process.env.HOST;

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection open');
  app.listen(port, () => {
    console.log(`App listening on http://${host}:${port}`);
  });
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api', reportRoutes);


