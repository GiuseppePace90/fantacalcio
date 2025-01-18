class dizionarioView {

    constructor(id, descrizione) {
        this.id = id;
        this.descrizione = descrizione;
        this.init(id, descrizione);
    }

    getId() {
        return this.id;
    }
    getDescrizione() {
        return this.descrizione;
    }
    setId(id) {
        this.id = id;
    }
    setDescrizione(descrizione) {
        this.descrizione = descrizione;
    }

    init(id, descrizione) {
        if(!id) { this.setId(null) } else { this.setId(id) }
        if(!descrizione) { this.setDescrizione(null) } else { this.setDescrizione(descrizione)}
    }
}

module.exports = dizionarioView;