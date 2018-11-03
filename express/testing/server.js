const express = require('express');
const tacos = require('./tacos'); //add the taco route

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Testing routes is awesome!');
});

app.use(express.json());
app.use('/tacos', tacos); //use the taco router on the taco route
app.listen(3000, () => console.log('Listening on port 3000...'));

module.exports = app;