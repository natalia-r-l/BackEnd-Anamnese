const db = require('../util/database');

module.exports = class AnamneseDetails {
    constructor(dentista){        
        this.dentista = dentista;       
    }

    static findAnamneseDetails(dentista){
        return db.execute('SELECT A.id, A.dentista, A.paciente, A.data, AN.anamnese, AN.pergunta, AN.resposta, P.descricao AS pergunta_descricao, R.descricao AS pergunta_resposta FROM anm_pergunta AS P INNER JOIN anm_anamnese_pergunta_resposta AS AN ON P.id = AN.pergunta INNER JOIN anm_resposta AS R ON R.id = AN.resposta INNER JOIN anm_anamnese AS A ON A.id = AN.anamnese WHERE dentista = ?', [dentista]);
    }
};