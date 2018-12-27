const mongoose = require('mongoose');

// create the user schema

const userSchema = mongoose.Schema({
    role: "user",
    username: String,
    password: ,
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    updated: Date.now,
    orders: String,
});

module.exports = mongoose.model('User', userSchema);