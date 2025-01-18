function schema() {
    this.utente = {
        username: String,
        password: String,
        id_contatti: Number,
        id_t_ruolo: Number,
        ultimo_accesso: Date
    };
    this.contatti = {
        id: Number,
        email: String,
        telefono: Number
    };
    this.t_ruolo = {
        id: Number,
        descrizione: String
    };
    this.squadra = {
        id: Number,
        nome: String,
        id_utente: Number,
        id_rosa: Number,
        id_t_modulo: Number,
        id_t_stadio: Number
    };
    this.messaggi = {
        _id: Number,
        id_utente: Number,
        descrizione: String,
        data: Date
    }
    this.sequence = {
        id: Number,
        id_t_seq: Number
    }
    this.t_sequence = {
        _id: Number,
        descrizione: String
    }
    this.task = {
        title: String,
        description: String,
        completed: Boolean
    }
    this.rose = {
        id: Number,
        nome: String,
    }
    this.rel_rose_player = {
        id_rosa: Number,
        id_player: Number
    }
    this.players = {
        id: Number,
        nome: String,
        squadra: String,
        presenze: Number,
        media_voto: Number,
        media_fvoto: Number,
        quotazione: Number
    }
    this.voti = {
        ruolo: String,
        nome: String,
        voto: String,
        golFatto: String,
        golSubito: String,
        rigoreParato: String,
        rigoreSbagliato: String,
        rigoreFatto: String,
        autoGol: String,
        ammonito: String,
        espulso: String,
        assist: String
    }
}

module.exports = schema;
