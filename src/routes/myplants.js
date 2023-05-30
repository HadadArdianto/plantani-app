const express = require('express');

const myPlantsController = require('../controller/myplants.js');

const router = express.Router();

router.get('/', myPlantsController.getAllMyPlants);

module.exports = router;