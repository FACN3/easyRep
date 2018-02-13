const router = require('express').Router();
const createReport = require('../controllers/createReport');

//add report to the database
router.post('/create_report', createReport);

module.exports = router;
