const express = require('express');
const routes = require('./routes');
const session = require('express-session');

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: ['fickle flamingo', 'grumpy gopher'],
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
}));

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log('listening on port 3000....'));