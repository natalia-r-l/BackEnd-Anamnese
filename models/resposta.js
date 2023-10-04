const db = require('../util/database');

module.exports = class Resposta {
   
    static fetchAllAnswers(){
        return db.execute('SELECT * from anm_anamnese as a JOIN anm_anamnese_pergunta_resposta b ON a.id = b.anamnese JOIN anm_resposta c ON c.id = b.resposta');
    }
};