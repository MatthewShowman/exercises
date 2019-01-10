const passport = require('passport'); //
const express = require('express');
const flash = require('connect-flash');
const mongodb = require('./mongodb.utils');
const session = require('express-session');
const User = require('./models/user.model');
const routes = require('./routes');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongodb.createEventListeners();
mongodb.connect();

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // "extended" makes it more robust
app.use(session({ 
    secret: ['chaos kitty', 'dangerous doggy'],
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);

app.listen(3000, () => console.log('listening on port 3000'));