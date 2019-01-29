const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: ['bitter beaver', 'dangerous doggy', 'eager echidna'],
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
}));
app.use(flash());

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log('listening...'));