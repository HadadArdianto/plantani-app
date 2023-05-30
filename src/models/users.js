const dbPool = require('../config/database');

// API menampilkan data user sesuai {id}
const getUserById = (user_id) => {
    const SQLQuery = `SELECT * FROM users WHERE user_id=${user_id}`;
    
    return dbPool.query(SQLQuery);
  }

// API meng-update data user sesuai {id}
const updateUserById = (body, user_id) => {
    const SQLQuery = `  UPDATE users
                        SET name='${body.name}', username='${body.username}', email='${body.email}', phoneNumber='${body.address}' 
                        WHERE id=${user_id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getUserById,
    updateUserById,
}