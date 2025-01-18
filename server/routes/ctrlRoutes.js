const router = require('express').Router();
const loginControllerModule = require('../controller/api.controller.login');
const homeControllerModule = require('../controller/api.controller.home');

let loginController = new loginControllerModule();
let homeController = new homeControllerModule();


router.get('/login/:username', (req, res) => {
    loginController.nuovoUtente(req, res);  
});

router.get('/voti', (req, res) => {
    homeController.getVoti(req, res);  
});

router.get('/datiDiretta', (req, res) => {
    homeController.getDatiDiretta(req, res);  
});

module.exports = router;