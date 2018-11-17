/* 
createEventListeners
connect
dsisconnect
*/

const mongoose = require('mongoose');

function createEventListeners() {
    mongoose.connection.once('connected', () => {
        console.log('connected');
    });

    mongoose.connection.on('error', () => {
        console.log('Error connecting to the database')
    });
}

function connect() {
    mongoose.connect('mongodb://localhost/backend-class', { useNewUrlParser: true });
}

function disconnect() {
    mongoose.disconnect();
}

module.exports = {
    createEventListeners,
    connect,
    disconnect,
}