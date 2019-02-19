const mongoose = require('mongoose');

// create our schema

const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
});

customerSchema.virtual("fullname").get( function() {
    return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model('Customer', customerSchema);