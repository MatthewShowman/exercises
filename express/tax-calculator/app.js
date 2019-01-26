const express = require('express');
const
const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log('listening...'));