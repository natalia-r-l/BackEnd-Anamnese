const express = require('express');

const { body } = require ('express-validator');

const auth =require('../middleware/authMiddleware');

const router = express.Router()

const perguntaController = require('../controllers/perguntaController');

router.get('/', auth, perguntaController.fetchAllQuestions);

module.exports = router;