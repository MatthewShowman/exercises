const router = require('express').Router();
const Puppy = require('../models/puppy.model');

router.get('/puppies', async (req, res) => {
    try {
        let puppies = await Puppy.find().sort({name: 1})
        res.status(200).json(puppies);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.get('/puppies/:id', async (req, res) => {
    try {
        let puppy = await Puppy.findById(`${req.params.id}`);
        res.status(200).json(puppy);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.delete('/puppies/:id', async (req, res) => {
    try {
        let deletedPuppy = await Puppy.findByIdAndDelete(`${req.params.id}`);
        res.status(200).json(deletedPuppy);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.post('/puppies', async (req, res) => {
    try {
        let newPuppy = new Puppy(req.body);
        let savedPuppy = await newPuppy.save();
        res.status(200).json(savedPuppy);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.patch('/puppies/:id', async (req, res) => {
    try {
        let updatedPuppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPuppy);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.put('/puppies/:id', async (req, res) => {
    try {
        let replacedPuppy = await Puppy.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            overwrite: true
        });
        res.status(200).json(replacedPuppy);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

module.exports = router;