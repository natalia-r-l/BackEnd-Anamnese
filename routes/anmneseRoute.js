const express = require('express');

const { body } = require ('express-validator');

const auth =require('../middleware/authMiddleware');

const router = express.Router()

const anamneseController = require('../controllers/anamneseController');

router.get('/', auth, anamneseController.fetchAll);
router.post('/', auth, anamneseController.findAnamnese);

module.exports = router;