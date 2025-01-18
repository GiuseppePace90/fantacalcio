const mongoose = require("mongoose");
const schemas = require("./schemas");

const initSchemas = new schemas();

function dbo() {
    this._url = "mongodb+srv://dbUser:Ns3tt1la!Val3nt1n0@cluster0.bvdsj4y.mongodb.net/";
}

dbo.prototype.Connect = function() {
    const connection = mongoose.connect(this._url)
        .then(function() {
            var state = mongoose.connection.readyState;
            return state;
        });
    return connection;
}

dbo.prototype.Sequencer = function() {
    return mongoose.model("sequences", new mongoose.Schema(initSchemas.sequence))
}

dbo.prototype.UtenteModel = function(name) {
    return mongoose.model(name, new mongoose.Schema(initSchemas.utente));
}

dbo.prototype.MessaggiModel = function(name) {
    return mongoose.model(name, new mongoose.Schema(initSchemas.messaggi));
}

dbo.prototype.ContattiModel = function(name) {
    return mongoose.model(name, new mongoose.Schema(initSchemas.contatti));
}

dbo.prototype.VotiModel = function(name) {
    return mongoose.model(name, new mongoose.Schema(initSchemas.voti));
}

dbo.prototype.RoseModel = function(name) {
  return mongoose.model(name, new mongoose.Schema(initSchemas.rose));
}

dbo.prototype.RelRosePlayerModel = function(name) {
  return mongoose.model(name, new mongoose.Schema(initSchemas.rel_rose_player));
}

dbo.prototype.PlayersModel = function(name) {
  return mongoose.model(name, new mongoose.Schema(initSchemas.players));
}

module.exports = dbo;

