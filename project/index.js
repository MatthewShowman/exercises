/*
    read in our dependencies
    create a connection to our database
    create our express app
    set up expess.json middleware
    set up the urlencoded middleware
    tell the app where the routes are
    have our app listion
*/

const express = require('express');
const fs = require('fs');
const https = require('https');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const User = require('./models/user.model');
const routes = require('./routes');

const mongoDB = require('./mongodb.utils');
const routes = require('./routes');
const sslKey = fs.readFileSync('./ssl/shoe-store-key.pem');
const sslCert = fs.readFileSync('./ssl/shoe-store-cert.pem');

const options = {
    key: sslKey,
    cert: sslCert,
};

assport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
mongoDB.createEventListeners();
mongoDB.connect();

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(session({
    secret: ['bitter beaver', 'dangerous doggy', 'eager echidna'],
    cookie: { secure: true},
}));

app.use('/', routes);

https.createServer(options, app).listen('2222', () => console.log('listening on port 2222....'));