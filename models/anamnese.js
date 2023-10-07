const db = require('../util/database');

module.exports = class Anamnese {
    constructor(dentista){        
        this.dentista = dentista;       
    }

    static loginDentista(dentista){
        return db.execute('SELECT * FROM anm_anamnese WHERE SUBSTRING(dentista, 1, 5) = ?', [dentista]);
    }

    static findAnamnese(dentista){
        return db.execute('SELECT * FROM anm_anamnese WHERE dentista = ?', [dentista]);
    }
};

