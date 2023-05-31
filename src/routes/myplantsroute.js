const express = require('express');

const myPlantsController = require('../controller/myplantscontroller.js');

const router = express.Router();

// READ - GET
router.get('/', myPlantsController.getAllMyPlants);

module.exports = router;