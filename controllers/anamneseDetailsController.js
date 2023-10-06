const AnamneseDetails = require('../models/anamneseDetails');

exports.findAnamneseDetails = async (req, res, next) => {
    try {
      const listAnamnsese = await AnamneseDetails.findAnamneseDetails(req.body.dentista);
      res.status(200).json(listAnamnsese);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };