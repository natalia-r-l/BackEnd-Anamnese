const { validationResult } = require('express-validator');

const Anamnese = require('../models/anamnese');


exports.fetchAll = async (req, res, next) => {

    try{
        const [allAnamneses] = await Anamnese.fetchAll();
        res.status(200).json(allAnamneses);

    } catch (err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }

}

exports.findAnamnese = async (req, res, next) => {
    try {
      const listAnamnsese = await Anamnese.findAnamnese(req.body.dentista);
      res.status(200).json(listAnamnsese);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };