const express = require('express');

const plantDiseasesController = require('../controller/plantdiseasescontroller.js');

const router = express.Router();

// READ - GET
router.get('/', plantDiseasesController.getAllPlantDiseases);

// READ - GET
router.get('/:plantDiseaseId', plantDiseasesController.getPlantDiseasesById);

module.exports = router;