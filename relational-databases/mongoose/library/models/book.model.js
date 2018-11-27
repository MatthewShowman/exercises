// title
// author

const mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
    title: String, // type is a strong
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Author"} // type is an ObjectId
});

module.exports = mongoose.model('Book', bookSchema);

/*
let book = new Book({title: "To Kill a Mockingbird", author: "Harper Lee"});
book.save();
book.find();
book.findById();
*/