const express = require('express');
const app = express.Router();
const home = require("../services/homeService");


function homeController() { 
    this.message;
}

homeController.prototype.nuovoUtente =  async function(req, res) {
    console.log(req.params);
    //this.message = login.nuovoUtente(req.params.username);
    //res.send(this.message);
}


module.exports = homeController;