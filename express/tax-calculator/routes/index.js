const router = require('express').Router();

const taxController = require('../controllers/tax.controller');

router.get('/', (req, res) => {
    let taxes = {"tax" : 0};
    res.render('home', {taxes, error: req.flash('error')});
});

router.post('/', (req, res) => {
    let income = req.body;
    if(income < 0){
        req.flash('error', 'Income cannot be negative');
        return res.redirect("/");
    }
    let taxes = {"tax" : taxController.taxCalculator(income)};
    res.render('home', {taxes});
});

module.exports = router;