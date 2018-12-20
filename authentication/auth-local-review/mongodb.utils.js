const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect('mongodb://localhost/auth-local-review');
}

exports.createEventListeners = () => {
    mongoose.connection.on('connected', () => console.log('connected'));
}

mongoose.connection.on('error', () => console.log('error connecting to the database'))