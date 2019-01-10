const express = require("express");
const passport = require("passport");
const mongodb = require("./mongodb.utils");
const session = require("express-session");
const User = require("./models/user.model");
const routes = require("./routes");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongodb.createEventListeners();
mongodb.connect();

const app = express();

app.use(session({ secret: "Merry Christmas" }))
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});