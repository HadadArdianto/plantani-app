const express = require('express');

const userController = require('../controller/users.js');

const router = express.Router();

//READ - GET
router.get('/:user_id', userController.getUserById);

// UPDATE - PATCH
router.patch('/:user_id', userController.updateUserById);

module.exports = router;