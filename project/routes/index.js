const router = require('express').Router();
// const customerController = require('../controllers/customer.controller');

router.get('/', (req, res) => {
    res.render('layout');
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/shoes')


module.exports = router;