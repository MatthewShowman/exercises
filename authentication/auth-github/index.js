const express = require('express');
const passport = require('passport');
const session = require('express-session');
const githubStrategy = require('passport-github2');
const isAuthenticated = require('./middleware/is-authenticated');

const app = express();

app.use(session({ secret: 'Jabberwocky' }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new githubStrategy(
    {
        clientID: '033e4841817fb0e1b7d8',
        clientSecret: 'f3d7c53107f2ef95b32190370f997fb00c266b01',
        callbackURL: 'http://localhost:3000/login/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('/login', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/login/callback', passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
    res.send('login successful');
});

app.get('/secrets', isAuthenticated, (req, res) => {
    res.send('all of my secrets: ' + req.user.id);
});

app.listen('3000', () => console.log('listening on port 3000'));