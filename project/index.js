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

const mongoDB = require('./mongodb.utils');
const routes = require('./routes');
const sslKey = fs.readFileSync('./ssl/shoe-store-key.pem');
const sslCert = fs.readFileSync('my-./ssl/shoe-store-cert.pem');

const options = {
    key: sslKey,
    cert: sslCert,
};

mongoDB.createEventListeners();
mongoDB.connect();

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

https.createServer(options, app).listen('2222', () => console.log('listening on port 2222....'));