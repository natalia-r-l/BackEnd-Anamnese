const db = require('../util/database');

module.exports = class Anamnese {
    constructor(dentista){        
        this.dentista = dentista;       
    }

    static find(dentista){
        return db.execute('SELECT * FROM anm_anamnese WHERE dentista = ?', [dentista]);
    }

    static fetchAll(){
        return db.execute('SELECT * FROM anm_anamnese as a JOIN anm_anamnese_pergunta_resposta b ON a.id = b.anamnese JOIN anm_pergunta c ON c.id = b.pergunta JOIN anm_resposta d ON d.id = b.resposta');
    }

    static fetchAllQuestions(){
        return db.execute('SELECT * FROM anm_anamnese as a JOIN anm_anamnese_pergunta_resposta b ON a.id = b.anamnese JOIN anm_pergunta c ON c.id = b.pergunta');
    }
};

