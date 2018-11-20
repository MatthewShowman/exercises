//require all dependencies
// express
// user mongodb utils of connect to the database
//set up our server
    // set up routes for /puppies

//have our server listen

const express = require('express');
const mongodb = require('./mongodb.utils');
// const Puppy = require('./models/puppy.model');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use('/', router);

mongodb.createEventListeners();
mongodb.connect();

app.listen('3000', () => console.log('listenin on port 3000'));