/*
    read in dependencies
    read in routes
    rtead in ssl docs
    create a passport strategy
    create an express app
    create a connection to our database
    set up expess.json middleware
    set up the urlencoded middleware
    set up passport session
    have our app listen / create a https connection
*/

const express = require('express');
const fs = require('fs');
const https = require('https');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');

const User = require('./models/user.model');
const routes = require('./routes');
const mongoDB = require('./mongodb.utils');

const sslKey = fs.readFileSync('./ssl/shoe-store-key.pem');
const sslCert = fs.readFileSync('./ssl/shoe-store-cert.pem');

const options = { // new certs will be needed in the future
    key: sslKey,
    cert: sslCert,
};

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
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
app.use(express.static(path.join(__dirname, 'views')))

https.createServer(options, app).listen('2222', () => console.log('listening on port 2222....'));