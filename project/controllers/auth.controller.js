const passport = require('passport');
const User = require('../models/user.model');

exports.register = async (req, res, next) => {
    newUser = req.body; // How can I get all of the req.body values to be included in creating a new user?

    let user = new User({
        username: newUser.username
    });

    // Add an if-then statement to check for in-use usernames & email address

    try {
         // register is from the passport-local-mongoose plugin
         // I don't think it needs to be required... I may be wrong
        let registeredUser = await User.register(user, newUser.password);
        await registeredUser.save;
        next();
    }
    catch (error) {
        res.redirect('/register');
    }
}


// Edit ALL  of these 
exports.login = (req, res, next) => {
    passport.authenticate('local', { // returns middleware
        failureRedirect: '/login',
        failureFlash: 'username or password is incorrect',
        successRedirect: req.session.redirectTo || '/',
        successFlash: 'You are now logged in'
    })(req, res, next);
}

exports.logout = (req, res) => {
    req.logout();
    req.flash('success', 'You are now logged out');
    res.redirect('/login');
}

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    req.session.redirectTo = req.path;

    res.redirect('/login');
}