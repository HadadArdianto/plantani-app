const dbPool = require('../config/database');

// API menampilkan semua data PlantDiseases
const getAllPlantDiseases = () => {
    const SQLQuery = 'SELECT * FROM plantdiseases';
    return dbPool.execute(SQLQuery);
}

// API menampilkan data PlantDiseases sesuai user{id}
const getPlantDiseasesById = (user_id) => {
    const SQLQuery = `SELECT * FROM plantdiseases WHERE plantDisease_id=${plantDisease_id}`;  
    return dbPool.query(SQLQuery);
  }

module.exports = {
    getAllPlantDiseases,
    getPlantDiseasesById,
}