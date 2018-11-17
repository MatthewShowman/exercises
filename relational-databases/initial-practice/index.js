const express = require('express');
const command = require('./database-commands.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Apple Store inventory');
});

app.get('/inventory', (req, res) => {
    let allProducts = command.checkAllProducts('ipad');
    res.json(allProducts);
});





// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

app.listen(3000, () => console.log('Listening on port 3000'));