const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');

const Anamnese = require('../models/anamnese');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) return

    const dentista = req.body.dentista;

    try{
        const hashedPassword = await bcrypt.hash(password, 12)

        const anamneseDetails = {
            dentista: dentista,
        }

        const result = await Anamnese.save(anamneseDetails);

        res.status(201).json({ message: 'Usuário registrado!'})
    } catch (err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    }
}



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