const router = require('express').Router();

router.get('/api', (req, res) => {
    res.send('Welcome to my api route.');
});

router.get('/api/movies', (req, res) => {
    res.send('Welcome to my movies route.');
})

module.exports = router;