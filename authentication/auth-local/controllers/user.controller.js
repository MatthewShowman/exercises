exports.loginForm = (req, res) => {
    res.render('login', req.flash());
}

exports.registerForm = (req, res) => {
    res.render('register', req.flash());
}

exports.secretsPage = (req, res) => {
    res.send('All of my secrets');
}

exports.profilePage = (req, res) => {
    res.render('profile', {user: req.user});
}