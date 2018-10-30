const router = require('express').Router();
const usersRouter = require('./users');
const postsRouter = require('./posts');

router.get('/', (req, res) => {
    res.send('Welcome to [social media app]!')
});

router.use('/users', usersRouter);
router.use('/posts', postsRouter);

module.exports = router;