const db = require('../util/database');

module.exports = class Pergunta {
   
    static fetchAllQuestions(){
        return db.execute('SELECT * FROM anm_anamnese as a JOIN anm_anamnese_pergunta_resposta b ON a.id = b.anamnese JOIN anm_pergunta c ON c.id = b.pergunta');
    }
};