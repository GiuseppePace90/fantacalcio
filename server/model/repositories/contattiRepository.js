const db = require("../database/dbConfig");

const database = new db();

function contattiModel() {
    this.contattiModel = database.ContattiModel("Contatti");
};

contattiModel.prototype.findById = function(id) {
    return this.contattiModel.find({id: id}); 
};

contattiModel.prototype.findByEmail = function(email) {
    return this.contattiModel.find({email: email }); 
};

contattiModel.prototype.findByTelefono = function(telefono) {
    return this.contattiModel.find({telefono: telefono }); 
};

module.exports = contattiModel;