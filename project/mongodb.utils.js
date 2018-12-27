//createEventListeners
//connect
//disconnect

const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://mshowman:LiaoSha831106%40UA@ds243963.mlab.com:43963/shoestore', { useNewUrlParser: true });
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