// createEventListeners
// connect
// disconnect
const mongoose = require('mongoose');

function connect() {
  let mongoUrl = process.env.MYAPP_MONGO_URL || 'mongodb://localhost/customer-app';

  mongoose.connect(mongoUrl);
}

function createEventListeners() {
  mongoose.connection.once('connected', () => {
    console.log('Connected!');
  });

  mongoose.connection.on('error', () => {
    console.log('Error connecting to mongodb.")');
  });
}

function disconnect() {
  mongoose.disconnect();
}

module.exports = {
  connect,
  createEventListeners,
  disconnect,
}