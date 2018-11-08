const express = require('express');
const axios = require('axios');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug');
let countries;

axios.get('https://restcountries.eu/rest/v2/region/europe')
    .then(response => {
        countries = response.data;
    })

app.get('/',  (req, res) => {
    res.render('countries.pug', {countries});
});

app.get('/:id',  (req, res) => {
    let foundCountry = countries.find(country => country.id == req.params.id);
    res.render('detail.pug', {foundCountry});
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});