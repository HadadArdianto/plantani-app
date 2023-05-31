const UsersModel = require('../models/usersmodel');

const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await UsersModel.getUserById(userId);
        if (user) {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        });
    }
}

const updateUserById = async (req, res) => {
    const { userId } = req.params;
    const { name, username, email, phoneNumber, locationId } = req.body;
    try {
        await UsersModel.updateUserById(userId, {name, username, email, phoneNumber, locationId});
        const updateUser = await UsersModel.getUserById(userId)
        res.json({
            message: 'UPDATE user success',
            data: updateUser
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        });
    }
}

module.exports = {
    getUserById,
    updateUserById,
}