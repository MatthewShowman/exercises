const express = require('express');
const pug = require('pug');
const restaurants = require('./data/restaurants')
let app = express();

// Set our view engine to render dynamic html
app.set('view engine', 'pug' /*name of our engine*/);

app.get('/', (req, res) => {
    res.render('restaurants.pug', {
        title: 'Great Restaurants',
        image: '/static/lasagna.png',
        restaurants: restaurants
    });
});

app.get('/restaurant/:id', (req, res) => {
    let foundRestaurant = restaurants.find(restaurant => restaurant.id == req.params.id);
    res.render('restaurant-detail.pug', {
        foundRestaurant
    });
});
app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('listening on port 3000');
});
