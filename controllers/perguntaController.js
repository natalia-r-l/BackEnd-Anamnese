const { validationResult } = require('express-validator');

const Pergunta = require('../models/pergunta');

exports.fetchAllQuestions = async (req, res, next) => {

    try{
        const [allPerguntas] = await Pergunta.fetchAllQuestions();
        res.status(200).json(allPerguntas);

    } catch (err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }

}