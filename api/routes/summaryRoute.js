const router = require('express').Router(); //to add routes

 //Add Middlewares like check Authentication token
const checkAuth = require("../middlewear/check-auth")
const summaryValidator = require("../middlewear/summary-credentials")

//Add controllers to execute business logics
const summaryController = require('../controllers/summaryController')

//Add methods
router.post('/',summaryValidator.Summary_Credentials,
summaryController.addAngularSummary,
summaryController.addReactSummary,
summaryController.addVueSummary);

module.exports = router;