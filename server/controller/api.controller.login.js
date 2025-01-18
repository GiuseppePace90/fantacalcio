const loginServiceModule = require("./services/api.service.login");

const loginService = new loginServiceModule();


function loginController() { 
    this.message;
}

loginController.prototype.nuovoUtente = async function(req, res) {
    var obj = await loginService.save(req.params.username);
    res.send(JSON.stringify(obj));
}


module.exports = loginController;