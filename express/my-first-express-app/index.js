const express = require('express');

const app = express(); // This is a little like http.createServer.

app.get('/', (req, res) => {
    res.send('Welcome to my moveis API.')
});

app.get('/movies', (req, res) /*callback funciton*/ => {
    if (req.query.title) {
        res.send('movies route with title filter of ' + req.query.title);
    } else {
        res.send('movies route')
    };
});

app.get('/movies/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    res.send('Movie with id ' + id);
});

app.post ('/movies', express.json(), (req, res) => { // We'll cover express.json later
    res.send(req.body);
});

app.get('/sum', (req, res) => {
    let sum = Number.parseInt(req.query.a) + Number.parseInt(req.query.b);
    res.send(sum.toString()); // OR res.send(200, sum); // success status code
});

app.get('/multiply', (req, res) => {
    let product = Number.parseInt(req.query.a) * Number.parseInt(req.query.b);
    res.send(product.toString()); // OR res.send(200, product); // success status code
});

app.listen(3000);
console.log('Listening to port 3000...');