const { validationResult } = require('express-validator');

const Resposta = require('../models/resposta');

exports.fetchAllAnswers = async (req, res, next) => {

    try{
        const [allRespostas] = await Resposta.fetchAllAnswers();
        res.status(200).json(allRespostas);

    } catch (err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }

}