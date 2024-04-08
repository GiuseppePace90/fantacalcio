const express = require('express');
const app = express.Router();
const login = require("./services/loginService");


function loginController() { 
    this.message;
}

loginController.prototype.nuovoUtente =  async function(req, res) {
    console.log(req.params);
    //this.message = login.nuovoUtente(req.params.username);
    //res.send(this.message);
}


module.exports = loginController;