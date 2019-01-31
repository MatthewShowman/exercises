
const router = require('express').Router();
const textingController = require('../controllers/textingControllers');

router.get('/', textingController.getHomePage);

router.post('/sendSMS', textingController.sendSMS);

module.exports = router;