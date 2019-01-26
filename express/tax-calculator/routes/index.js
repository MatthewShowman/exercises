const router = require('express').Router();
const taxController = require('../controllers/tax.controller');

router.get('/', (req, res) => {
    let taxes = {"tax" : 0};
    res.render('home', {taxes});
});

router.post('/', (req, res) => {
    let income = req.body;
    let taxes = {"tax" : taxController.taxCalculator(income)};
    res.render('home', {taxes});
});

module.exports = router;