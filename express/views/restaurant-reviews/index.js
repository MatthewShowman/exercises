const express = require('express');
const pug = require('pug');

let app = express();

// Set our view engine to render dynamic html
app.set('view engine', 'pug' /*name of our engine*/);

app.get('/restaurants', (req, res) => {
    res.render('restaurants.pug', { 
        title: 'Great Restaurants', 
        image: '/lasagna.png', 
        restaurants: [
            "Theo's",
            "Hugo's",
            "Wendy's",
            "Sassy's",
            "Abuelo's"
        ]
    });
});
app.use('/', express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('listening on port 3000');
});
