const User = require('../models/user.model');
const passport = require('passport');

exports.login = (req, res, next) => {
    return passport.authenticate("local", {
        failureRedirect: '/login',
        successRedirect: req.session.redirectTo || '/profile',
    })(req, res, next);
}

exports.logout = (req, res, next) => {
    require.logout();
    res.redirect('/login');
}

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } 

    req.session.redirectTo = req.path;

    res.redirect('/login');
};

exports.register = async (req, res, next) => {
    let {email, password} = req,body;
    let user = new User({
        email
    });

    try {
        let registerUser = await User.register(user, password);
        await registerUser.save();
        next();
    } catch (error){
        res.redirect('/register');
    }
}