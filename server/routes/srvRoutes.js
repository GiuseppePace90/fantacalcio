const router = require('express').Router();
const homeControllerModule = require('../controller/api.controller.home');


let homeController = new homeControllerModule();

router.get('/', (req, res) => {
    homeController.getHomepage(req, res);
});

router.get('/download', (req, res) => {
    homeController.downloadFile(req, res);
});

module.exports = router;