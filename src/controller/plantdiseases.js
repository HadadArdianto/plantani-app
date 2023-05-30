const PlantDiseasesModel = require('../models/plantdiseases');

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
    try {
        const [data] = await PlantDiseasesModel.getPlantDiseasesById();
        res.json({
            message: 'GET Data plantdiseasesbyid success',
            data: data
        })
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