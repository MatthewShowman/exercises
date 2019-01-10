exports.loginForm = (req, res) => {
    res.render("login");
  }
  
  exports.registerForm = (req, res) => {
    res.render("register");
  }
  
  exports.profileForm = (req, res) => {
    res.render("profile");
  }
  
  exports.profilePage = (req, res) => {
    res.render("profile", { user: req.user });
  }