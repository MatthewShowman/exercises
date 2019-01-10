//createEventListeners
//connect
//disconnect

const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://admin:admin1@ds157288.mlab.com:57288/customer-app', { useNewUrlParser: true });
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