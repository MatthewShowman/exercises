const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const bookSchema = mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
});

module.exports = mongoose.model('Book', bookSchema);
