const reportRouter = require('express').Router();
const createReport = require('../controllers/createReport');
const sendEmail = require('../controllers/sendEmail');
const viewReports = require('../controllers/viewReports');

//add report to the database
reportRouter.post('/create_report', createReport);
reportRouter.post('/send_email', sendEmail);
reportRouter.get('/view_reports', viewReports);

module.exports = reportRouter;
