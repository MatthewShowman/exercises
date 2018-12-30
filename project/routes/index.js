const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authController = require('../controller/auth.controller');

router.get('/', (req, res) => {
    res.render('layout');
});

// LOGIN
router.get('/login', userController.loginForm)
router.post('/login', authController.login);

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/shoes', (req, res) => {
    res.render('shoes');
})


module.exports = router;