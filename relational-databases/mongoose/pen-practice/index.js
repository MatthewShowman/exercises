const express = require('express');
const router = require('');
const mongodb = require('./mongodb.utils');


const app = express();

app.use(express.json());
app.use('/', router);

mongodb.createEventListeners();
mongodb.connect();

app.listen('3000', () => console.log('listening on port 3000'));


