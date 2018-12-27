//require all dependencies
    // express
    // user mongodb utils of connect to the database

//set up server
    // set up routes for /puppies

//have our server listen

const express = require('express');
const axios = require('axios');
const pug = require('pug');

const mongodb = require('./mongodb.utils');
// const Puppy = require('./models/puppy.model');
const router = require('./routes');

const app = express();
app.set('view engine', 'pug');

app.use(express.json());
app.use('/', router);

mongodb.createEventListeners();
mongodb.connect();

// let shoes;

// axios.get('localhost:3000/shoes')
//     .then(response => {
//         shoes = response.data;
//     }).catch(err => 
//         console.error(err)
//       )

// app.get('/',  (req, res) => {
//     res.render('shoes.pug', {shoes});
// });

app.listen('3000', () => console.log('listenin on port 3000'));
