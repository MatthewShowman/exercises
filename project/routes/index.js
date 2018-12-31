const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const nav = require('../controllers/nav.controller');

/*
Routes needed
    home
    login
    register / create an account
    shoes
        men and women query or param?
        by type?
        individual shoes (by id)
    user profile
        edit info
        view orders?
    admin profile
        edit info
        edit shoes
        edit users
        add shoes
        delete shoes
*/


router.get('/', (req, res) => {
    res.render('landing-page');
});

router.get('/home', (req, res) => {
    res.render('layout');
});

// LOGIN
// Still need to pass in controllers, e.g. as shown in examples below
router.get('/login', (req, res) => {
    res.render('login');
})

//router.get('/login', userController.loginForm)
//router.post('/login', authController.login);

// REGISTER
// Still need to pass in controllers, e.g. as shown in examples above
router.get('/register', (req, res) => {
    res.render('register');
})

// 
router.get('/shoes', (req, res) => {
    res.render('shoes');
})

router.get('/shoes/:id', nav.shoeById);

module.exports = router;