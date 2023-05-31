const express = require('express');

const userController = require('../controller/userscontroller.js');

const router = express.Router();

//READ - GET
router.get('/:userId', userController.getUserById);

// UPDATE - PATCH
router.patch('/:userId', userController.updateUserById);

module.exports = router;