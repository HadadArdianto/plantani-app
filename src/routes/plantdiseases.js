const express = require('express');

const plantDiseasesController = require('../controller/plantdiseases.js');

const router = express.Router();

router.get('/', plantDiseasesController.getAllPlantDiseases);
router.get('/:plantDisease_id', plantDiseasesController.getPlantDiseasesById);

module.exports = router;