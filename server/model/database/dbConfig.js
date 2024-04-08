const mongoose = require("mongoose");
const schemas = require("./schemas");

const initSchemas = new schemas();

function dbo() {
    this._url = "mongodb://127.0.0.1:27017/test";
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

module.exports = dbo;

