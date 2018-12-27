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
const mongoDB = require('./mongodb.utils');
const routes = require('./routes');

mongoDB.createEventListeners();
mongoDB.connect();

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

app.listen(2222, () => console.log('listening on port 2222....'));

