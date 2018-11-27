const mongoose = require('mongoose');

const penSchema = mongoose.Schema({
    style: String,
    color: String,
    countPerPack: Number,
});

module.exports = mongoose.model('Pen', penSchema);