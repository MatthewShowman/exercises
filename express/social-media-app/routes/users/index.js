const router = require('express').Router();
const debug = require('debug')('social-media-app:users');

let users = [
    {
        id: 1,
        username: 'john123'
    },
    {
        id: 2,
        username: 'jane456'
    }
];

router.get('/', (req,res) => {
    debug(req.headers);
    res.status(200).json(users);
});

router.get('/:id', (req, res) => {
    let foundUser = users.find(user => user.id == req.params.id);
    res.send(foundUser);
});

router.post('/', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    newUser.id = users.length;
    res.status(200).json(newUser);
});

// router.put('/:id', (req, res) => {
//     let newUsername = req.body;
//     newUsername.id = req.params.id;
//     users[originalIndex-1] = newUsername;
//     res(newUsername);
// });

module.exports = router;