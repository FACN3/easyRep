const Report = require('../models/Reports');

module.exports = (req, res) => {
  Report.find()
    .then(reports => {
      res.send(reports);
    })
    .catch(err => {
      res.status(500).send('unable to read from the database');
    });
};
