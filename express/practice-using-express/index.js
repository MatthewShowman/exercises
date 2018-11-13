const express = require('express');
const axios = require('axios');

const app = express();
app.set('view engine', 'pug');

let movies;

axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=5749f779&title=Ghostbusters')
    .then(response => {
        movies = response.data;
    })

app.listen(3333), () => console.log('listening on port 3333');
modules.exports = app;