const votiRepositoryModule = require("../../model/repositories/api.repository.voti");
const votiRepository = new votiRepositoryModule("voti_24_7");

class homeService {
    constructor() {

        this.message;

    }
    getMessage() {
        return { text: "Server online!" };
    }
    salvaVoti(r, n, v, gf, gs, rp, rs, rf, au, am, es, as ) {
        votiRepository.save(r, n, v, gf, gs, rp, rs, rf, au, am, es, as );
    }
    getVoti() {
        return votiRepository.findAll();
    }
}



module.exports = homeService;


