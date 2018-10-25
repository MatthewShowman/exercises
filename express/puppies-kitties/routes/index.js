const router = require('express').Router();
const puppies = require('./puppies');
const kitties = require('./kitties');


router.get('/', (req, res) => {
    res.send('Welcome to Puppies and Kitties!');
});

router.use('/puppies', puppies);
router.use('/kitties', kitties);

module.exports = router;

/*
/ "Welcome to Puppies and Kitties!"
/puppies --- Include all routes exported in the puppies router
/kitties --- Include all routes exported in the kitties router
*/