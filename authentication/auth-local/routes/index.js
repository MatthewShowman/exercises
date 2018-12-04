const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

router.get('/register', userController.registerForm);
router.post('/register', authController.register, authController.login); //if register returns next, login

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

router.get('/secrets', authController.isLoggedIn, userController.secretsPage);
router.get('/profile', authController.isLoggedIn, userController.profilePage); 

router.get('/logout', authController.logout);

module.exports = router;