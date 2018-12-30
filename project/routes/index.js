const router = require('express').Router();
// const customerController = require('../controllers/customer.controller');

router.get('/', (req, res) => {
    res.render('layout');
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/shoes', (req, res) => {
    res.render('shoes');
})


module.exports = router;