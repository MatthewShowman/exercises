const mongoose = require('mongoose');

const shoeSchema = mongoose.Schema({
    model: String,
    type: String,
    color: String,
    gender: String,
    size: Number,
    price: String,
    heelStack: String,
    foreStack: String,
    drop: String,
    weight: String,
    cushion: Number,
    support: Number,
    pliability: Number,
    inventory: Number,
});

module.exports = mongoose.model('Shoe', shoeSchema);