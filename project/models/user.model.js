const mongoose = require('mongoose');

// create the user schema

const userSchema = mongoose.Schema({
    role: { // This should only be made editable by administrators
        type: String,
        default: "user"
    },
    username: {
        type: String,
        trim: true,
        required: 'Please enter a username.'
    },
    password: String,
    firstname: {
        type: String,
        trim: true,
        required: 'Please enter a first name.'
    },
    lastname: {
        type: String,
        trim: true,
        required: 'Please enter a last name.'
    },
    email: {
        type: String,
        trim: true,
        required: 'Please enter a last name.'
    },
    address: {
        type: String,
        trim: true,
        required: 'Please enter a valid mailing address.'
    },
    city: {
        type: String,
        trim: true,
        required: 'Please enter a city.'
    },
    state: String,
    zipcode: {
        type: String,
        trim: true,
        required: 'Please enter a zip code.'
    },
    updated: {
        type: Date,
        default: Date.now
    }, 
    orders: [ // This will be empty at first. Purchases will push objects to the array
        {
            id: String,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
});

module.exports = mongoose.model('User', userSchema);