const express = require('express');

const { body } = require ('express-validator');

const auth =require('../middleware/authMiddleware');

const router = express.Router()

const anamneseDetailsController = require('../controllers/anamneseDetailsController');

router.post('/', auth, anamneseDetailsController.findAnamneseDetails);

module.exports = router;