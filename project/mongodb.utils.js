// createEventListeners
// connect
// disconnect

const mongoose = require('mongoose');

function createEventListeners() {
    mongoose.connection.once('connected', () => {
        console.log('connected');
    });

    mongoose.connection.on('error', () => {
        console.log('error connecting to mongodb');
    });
}

function connect() {
    mongoose.connect('mongodb://localhost/project', { useNewUrlParser: true });
}

function disconnect() {
    mongoose.disconnect();
}

module.exports = {
    createEventListeners,
    connect,
    disconnect,
}