const mongoose = require('mongoose');

const puppySchema = mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    likes: [String],
    dislikes: [String]
});

const Puppy = mongoose.model('Puppy', puppySchema);



module.exports = Puppy;