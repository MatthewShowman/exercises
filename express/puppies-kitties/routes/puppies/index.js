const router = require('express').Router();

// route - /puppies
// return all of the puppies in an array

const puppies = [
    {
      id: 1,
      name: 'Fluffykins',
      breed: 'Labradoodle',
      likes: ['naps', 'bones', 'cuddles'],
      dislikes: ['milk']
    },
    {
      id: 2,
      name: 'Sprinkles',
      breed: 'Dalmatian',
      likes: ['petting', 'snacks', 'swimming'],
      dislikes: ['all other animals', 'Dachshunds']
    },
    {
      id: 3,
      name: 'Bibblyboo',
      breed: 'Pug',
      likes: ['snoring'],
      dislikes: ['Dalmatians', 'trees']
    },
    {
      id: 4,
      name: 'Fred',
      breed: 'Frenchie',
      likes: ['snark', 'chasing rabbits', 'turkey'],
      dislikes: ['birds', 'squirrels', 'uneven bedding']
    }
  ];

router.get('/', /*refers to this directory*/ (req, res) => {
    res.send(puppies);
});

router.get('/:id', (req, res) => {
  let foundPuppy = puppies.find(puppy => puppy.id == req.params.id);
  res.send(foundPuppy);
});

router.post('/', (req, res) => {
  let newPuppy = req.body;
  puppies.push(newPuppy);
  newPuppy.id = puppies.length;
  res.send(newPuppy);
});

router.put('/:id', (req, res) => {
  let puppyToUpdate = puppies.find(puppy => puppy.id == req.params.id);
  puppyToUpdate.params = req.body.params
  res.send(puppyToUpdate);
  
});

module.exports = router;