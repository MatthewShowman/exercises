const router = require('express').Router();
// const customerController = require('../controllers/customer.controller');

router.get('/', (req, res) => {
    res.render('layout');
});

module.exports = router;