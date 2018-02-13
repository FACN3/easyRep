const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const reportRoutes = require('./routes/reportRoutes');

process.on('unhandledRejection', up => {
  throw up;
}); //in Node 8.2.1 if theres an error, the errors will not crash the program. Instead a warning is printed..so this code
// is here in order for that warning to go away and showing the error like usual

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = 5000 || process.env.PORT;
const host = 'localhost' || process.env.HOST;

mongoose.connect(keys.MONGO_URL);

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

app.listen(`${port}`, () => {
  console.log(`Express server listening on port https://localhost:${port}`);
});
