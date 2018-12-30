const passport = require('passport');
const User = require('../models/user.model'); // Use a capital U because we use this to build objects (like a class)

exports.register = async (req, res, next) => { // these are known as "stubbs" or skeletons
    let {} = req.body;

    let user = new User({
        username
    });

    try {
        let registeredUser = await User.register(user, password); // register is from the passport-local-mongoose plugin
        await registeredUser.save;
        next(); // need to pass user to the login middleware
    }
    catch (error) {
        res.redirect('/register');
    }
}

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
    req.flash('success', 'You are now logged out'); // made useable later by connect-flash module
    res.redirect('/login');
}

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    req.session.redirectTo = req.path;

    res.redirect('/login');
}