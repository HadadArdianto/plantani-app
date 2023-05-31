const dbPool = require('../config/database');

// API menampilkan semua data PlantDiseases
const getAllPlantDiseases = () => {
    const SQLQuery = 'SELECT * FROM plantdiseases';
    return dbPool.execute(SQLQuery);
}

// API menampilkan data PlantDiseases sesuai user{id}
const getPlantDiseasesById = async(plantDiseaseId) => {
    const SQLQuery = `SELECT * FROM plantdiseases WHERE plantDisease_id=?`;  
    const values = [plantDiseaseId];

    try {
        const [rows] = await dbPool.execute(SQLQuery, values);
        return rows [0];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPlantDiseases,
    getPlantDiseasesById,
}