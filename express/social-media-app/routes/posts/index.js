const router = require('express').Router();

let posts = [
    {
        id: 1,
        userId: 1,
        message: 'My first post!'
    },
    {
        id: 2,
        userId: 1,
        message: 'My second post!'
    },
    {
        id: 3,
        userId: 2,
        mesage: 'Hi everybody!'
    }
];

router.get('/', (req,res) => {
    res.status(200).json(posts);
});

// router.post('/', (req, res) => {
//     let newPost = req.body;
//     users.push(newPost);
//     newPost.id = posts.length;
//     res.status(200).send(newPost);
// });

module.exports = router;