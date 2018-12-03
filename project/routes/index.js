const router = require('express').Router();
const Shoe = require('../models/shoe.model');

router.get('/shoes', async (req, res) => {
    try {
        let shoes = await Shoe.find({}).sort({model: 1})
        res.status(200).json(shoes);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.get('/shoes/:id', async (req, res) => {
    try {
        let shoe = await Shoe.findById(`${req.params.id}`);
        res.status(200).json(shoe);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.delete('/shoes/:id', async (req, res) => {
    try {
        let deletedShoe = await Shoe.findByIdAndDelete(`${req.params.id}`);
        res.status(200).json(deletedShoe);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.post('/shoes', async (req, res) => {
    try {
        let newShoe = new Shoe(req.body);
        let savedShoe = await newShoe.save();
        res.status(200).json(savedShoe);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.patch('/shoes/:id', async (req, res) => {
    try {
        let updatedShoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedShoe);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.put('/shoes/:id', async (req, res) => {
    try {
        let replacedShoe = await Shoe.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            overwrite: true
        });
        res.status(200).json(replacedShoe);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

module.exports = router;