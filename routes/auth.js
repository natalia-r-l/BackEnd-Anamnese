const express = require('express');

const { body } = require ('express-validator');

const router = express.Router()

const Anamnese = require('../models/anamnese');

const authController = require('../controllers/auth');

router.post(
    '/signup',
    [
        body('dentista').trim().not().isEmpty(),   
          
    ],authController.signup           
);

router.post('/login', authController.login);

module.exports = router;