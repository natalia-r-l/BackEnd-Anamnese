const express = require('express');

const { body } = require ('express-validator');

const router = express.Router()

const authController = require('../controllers/authController');

router.post('/login', authController.login);

module.exports = router;