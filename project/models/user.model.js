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
    city: String,
    state: String,
    zipcode: String,
    updated: Date.now,
    orders: [{ id: String, date: Date }],
});

module.exports = mongoose.model('User', userSchema);