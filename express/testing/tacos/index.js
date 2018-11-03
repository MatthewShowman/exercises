const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send('...are delicious!');
});

router.post('/', (req, res) => {
    res.send(req.body);
});

module.exports = router;