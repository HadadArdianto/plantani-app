const UsersModel = require('../models/users');

const getUserById = async (req, res, ) => {
    try {
        const [data] = await UsersModel.getUserById();
        res.json({
            message: 'GET Data users by id success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const updateUserById = async (req, res) => {
    const {user_id} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUserById(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getUserById,
    updateUserById,
}