const db = require("../database/dbConfig");

const database = new db();

function models() {
    this.userModel = database.UtenteModel("Utenti");
};

models.prototype.findByUsername = function(username) {
    return this.userModel.find({username: username}); 
};

models.prototype.findByIdTRuolo = function(tipoRuolo) {
    return this.userModel.find({id_t_ruolo: tipoRuolo}); 
};

module.exports = models;