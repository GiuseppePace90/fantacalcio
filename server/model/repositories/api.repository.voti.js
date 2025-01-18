const db = require("../database/dbConfig");
const database = new db();

class votiModel {
    constructor(modelName) {
        this.votiModel = database.VotiModel(modelName);
    }
    
    findByRuolo(ruolo) {
        return this.votiModel.find({ ruolo: ruolo });
    }
    findByNome(nome) {
        return this.votiModel.find({ nome: nome });
    }
    findByVoto(voto) {
        return this.votiModel.find({ voto: voto });
    }
    findByNomeAndVoto(nome, voto) {
        return this.votiModel.find({ $and: [{nome: nome},{ voto: voto}] });
    }
    findAll() {
        return this.votiModel.find();
    }
    save(r, n, v, gf, gs, rp, rs, rf, au, am, es, as ) {
        this.votiModel.create({ ruolo: r, nome: n, voto: v, golFatto: gf, 
            golSubito: gs, rigoreParato: rp, rigoreSbagliato: rs, rigoreFatto: rf,
            autoGol: au, ammonito: am, espulso: es, assist: as});
    }
};


module.exports = votiModel;