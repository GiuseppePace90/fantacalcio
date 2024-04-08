const router = require('express').Router();
const loginControllerModule = require('../controller/api.controller.login');

let loginController = new loginControllerModule();

router.get('/login/:username', (req, res) => {
    loginController.nuovoUtente(req, res);
});

module.exports = router;