const homeRepositoryModule = require("../../model/repositories/homeRepository");
const homeRepository = new homeRepositoryModule();

function homeService() {

    this.message = "";

}

loginService.prototype.nuovoUtente = async function(username) {
    utenteRepository.findByUsername(username).then((data, err) => {
        if(data.length <= 0) {
            utenteRepository.userModel.create({ username : username})
            .then((data) => this.message = "L'utente " + data.username + " è stato creato correttamente");
        } else {
            this.message = "L'utente " + username + " esiste già. Provare con un altro username";
        }
        if(err) {
            this.message = err;
        }
    });
    return this.message;
}

module.exports = homeService;


