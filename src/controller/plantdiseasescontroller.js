const PlantDiseasesModel = require('../models/plantdiseasesmodel');

const getAllPlantDiseases = async (req, res) => {
    try {
        const [data] = await PlantDiseasesModel.getAllPlantDiseases();
        res.json({
            message: 'GET all plantdiseases success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const getPlantDiseasesById = async (req, res, ) => {
    const { plantDiseaseId } = req.params;
    try {
        const plantDisease = await PlantDiseasesModel.getPlantDiseasesById(plantDiseaseId);
        if (plantDisease) {
        res.json(plantDisease);
    }
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}



module.exports = {
    getAllPlantDiseases,
    getPlantDiseasesById,
}