const router = require('express').Router();
const homeControllerModule = require('../controller/restApi/homeController');

let homeController = new homeControllerModule();

router.get('/home', (req, res) => {
    homeController.getHomepage();
});

module.exports = router;