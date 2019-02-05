const router = require('express').Router();
const appControllers = require('../controllers/app.controller');

router.get('/', appControllers.homePage);
// router.get('/your-deck', appControllers.getDeck);
router.get('/your-card', appControllers.getCard);

module.exports = router;