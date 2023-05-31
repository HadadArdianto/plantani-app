const dbPool = require('../config/database');

// API menampilkan data user sesuai {id}
const getUserById = async(userId) => {
    const SQLQuery = `SELECT * FROM users WHERE user_id=?`;
    const values = [userId];

    try {
        const [rows] = await dbPool.execute(SQLQuery, values);
        return rows [0];
    } catch (error) {
        throw error;
    }
}

// API meng-update data user sesuai {id}
const updateUserById = async (userId, userData) => {
    const { name, username, email, phoneNumber, locationId } = userData;
    const SQLQuery = 'UPDATE users SET name = ?, username = ?, email = ?, phoneNumber = ?, location_id = ? WHERE user_id = ?';
    const values = [name, username, email, phoneNumber, locationId, userId];
    try {
        await dbPool.execute(SQLQuery, values);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUserById,
    updateUserById,
}