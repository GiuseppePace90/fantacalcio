const utenteRepositoryModule = require("../../model/repositories/api.repository.utente");
const dizionarioModule = require("../../views/api.view.dizionario");
const utenteRepository = new utenteRepositoryModule();
const dizionarioView = new dizionarioModule();

class loginService {

    constructor() {
    }

    async save(username) { 
        await utenteRepository.findByUsername(username).then((data, err) => {
            var result = "";
            try {
                if (data.length <= 0) {
                    utenteRepository.userModel.create({ username: username })
                        .then((data) => result = "L'utente " + data.username + " è stato creato correttamente");
                } else {
                    result = "L'utente " + username + " esiste già. Provare con un altro username";
                }
            } catch (error) {
                result = error;
            }
 
            dizionarioView.setDescrizione(result);
        });
        
        return dizionarioView;
    }
}



module.exports = loginService;


