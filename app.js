const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('env2')('./config.env');
const reportRoutes = require('./routes/reportRoutes');

mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api', reportRoutes);

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
