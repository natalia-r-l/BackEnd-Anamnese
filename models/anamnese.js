const db = require('../util/database');

module.exports = class Anamnese {
    constructor(dentista){        
        this.dentista = dentista;       
    }

    static find(dentista){
        return db.execute('SELECT * FROM anm_anamnese WHERE dentista = ?', [dentista]);
    }
};

