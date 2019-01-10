const express = require("express");
const auth = require("../controllers/auth.controller");
const user = require("../controllers/user.controller");

const router = express.Router();

router.get("/login", user.loginForm);
router.post("/login", auth.login);

router.get("/register", user.registerForm);
router.post("/register", auth.register, auth.login);
router.get("/logout", auth.logout);

// EVERYTHING ELSE IS SECURED
router.use("/", auth.isLoggedIn);
router.get("/profile", user.profilePage);

module.exports = router;