const express = require('express');

const { body } = require ('express-validator');

const auth =require('../middleware/authMiddleware');

const router = express.Router()

const respostaController = require('../controllers/respostaController');

router.get('/', auth, respostaController.fetchAllAnswers);

module.exports = router;