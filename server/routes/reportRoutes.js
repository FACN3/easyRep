const reportRouter = require('express').Router();
const createReport = require('../controllers/createReport');

//add report to the database
reportRouter.post('/create_report', createReport);

module.exports = reportRouter;
