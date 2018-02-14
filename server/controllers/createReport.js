const Report = require('../models/Reports');

module.exports = (req, res) => {
  const { report_type, location, effects } = req.body;
  const report = new Report({
    report_type,
    location,
    effects,
  });

  report
    .save()
    .then(report => {
      res.send(report);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
