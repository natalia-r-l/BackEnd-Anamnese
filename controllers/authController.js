const { validationResult } = require('express-validator');

const jwt = require ('jsonwebtoken');

const Anamnese = require('../models/anamnese');

exports.login = async(req,res,next) => {

    const dentista = req.body.dentista;    

    try{        
        const anamnese = await Anamnese.find(dentista);

        if(anamnese[0].length < 1) {
            const error = new Error('Dentista não encontrado!');
            error.statusCode = 401;
            throw error;
        }

        const storedAnamnese = anamnese[0][0];

        const token = jwt.sign(
            {
              dentista: storedAnamnese.dentista,
              anamneseId: storedAnamnese.id,
            },
            'secretfortoken',
            { expiresIn: '1h' }
          );
          res.status(200).json({ token: token, anamneseId: storedAnamnese.id, dentista: storedAnamnese.dentista });

    } catch (err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}