const nodemailer = require('nodemailer');
require('env2')('./config.env');

module.exports = (req, res) => {
  const message = req.body.email;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Reporting a hazard',
    text: message,
  };

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      res.status(500).send('Error in sending email', err);
    } else {
      res.send(response);
    }
  });
};
