const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const nav = require('../controllers/nav.controller');

router.get('/', (req, res) => {
    res.render('layout');
});

// LOGIN
router.get('/login', (req, res) => {
    res.render('login');
})

//router.get('/login', userController.loginForm)
//router.post('/login', authController.login);

// REGISTER
router.get('/register', (req, res) => {
    res.render('register');
})

// 
router.get('/shoes', (req, res) => {
    res.render('shoes');
})

router.get('/shoes/:id', nav.shoeById);

module.exports = router;