const MyPlantsModel = require('../models/myplants');

const getAllMyPlants = async (req, res) => {
    try {
        const [data] = await PlantDiseasesModel.getAllMyPlants();
        res.json({
            message: 'GET all MyPlants success',
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
    getAllMyPlants,
}