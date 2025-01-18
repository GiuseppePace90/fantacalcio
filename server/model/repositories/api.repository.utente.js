const db = require("../database/dbConfig");
const database = new db();

class utenteModel {
    constructor() {
        this.userModel = database.UtenteModel("Utenti");
    }
    
    findByUsername(username) {
        return this.userModel.find({ username: username });
    }
    findByIdTRuolo(tipoRuolo) {
        return this.userModel.find({ id_t_ruolo: tipoRuolo });
    }
};


module.exports = utenteModel;