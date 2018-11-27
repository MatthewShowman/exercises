//createEventListeners
//connect
//disconnect

const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost/backend-class');
}

function disconnect() {
    mongoose.disconnect();
}

function createEventListeners() {
    mongoose.connection.once('connected', () => {
        console.log('connected');
    });

    mongoose.connection.on('error', () => {
        console.log('error connecting to mongodb');
    });
}

module.exports = {
    connect,
    disconnect,
    createEventListeners,
}