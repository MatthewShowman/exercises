const mongoose = require('mongoose');

// create our schema

const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
});

module.exports = mongoose.model('Customer', customerSchema);