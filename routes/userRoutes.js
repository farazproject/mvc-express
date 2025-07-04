const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);

module.exports = router; 