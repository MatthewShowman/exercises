//createEventListeners
//connect
//disconnect

const mongoose = require('mongoose');

function connect() {
    let mongoURL = process.env.MYAPP_MONGO_URL || 'mongodb://localhost/cusotmer-app';
    mongoose.connect(mongoURL, { useNewUrlParser: true })
    
    // if(process.env.MYAPP_MONGO_URL)
    //     mongoose.connect(process.env.MYAPP_MONGO_URL, { useNewUrlParser: true });
    // else
    //     mongoose.connect('mongodb://localhost/cusotmer-app');
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