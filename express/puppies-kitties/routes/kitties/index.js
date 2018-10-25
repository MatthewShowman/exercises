const router = require('express').Router();

// route - /kitties
// return all of the kitties in an array

const kitties = [
    {
      id: 1,
      name: 'Socks',
      breed: 'Tuxedo',
      likes: ['catnip', 'cuddles'],
      dislikes: ['puppies']
    },
    {
      id: 2,
      name: 'Muffin',
      breed: 'Tabby',
      likes: ['snacks', 'sunshine'],
      dislikes: ['vacuums']
    },
    {
      id: 3,
      name: 'Sam',
      breed: 'Siamese',
      likes: ['clawing things', 'trees'],
      dislikes: ['toys meant for clawing']
    }
  ];
  
router.get('/', /*refers to this directory*/ (req, res) => {
    res.send(kitties);
});

router.get('/:id', (req, res) => {
    let foundKitty = kitties.find(kitty => kitty.id == req.params.id);
    res.send(foundKitty);
});

router.post('/', (req, res) => {
    let newKitty = req.body;
    kitties.push(newKitty);
    newKitty.id = kitties.length;
    res.send(newKitty);
});

module.exports = router;