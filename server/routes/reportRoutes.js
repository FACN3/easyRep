const reportRouter = require('express').Router();
const createReport = require('../controllers/createReport');
const sendEmail = require('../controllers/sendEmail');

//add report to the database
router.post('/create_report', createReport);
router.post('/send_email', sendEmail);

module.exports = reportRouter;
