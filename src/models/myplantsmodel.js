const dbPool = require('../config/database');

// API menampilkan semua plants
const getAllMyPlants = () => {
    const SQLQuery = 'SELECT * FROM myplants';
    
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllMyPlants,
}