// first name
// last name
// books

const mongoose = require('mongoose');

let authorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}], //reference the book collection in library db
});

module.exports = mongoose.model('Author', authorSchema);

/*
let author = new Author({firstName: "Harper", lastName: "Lee", books: "To Kill a Mockingbird"});
book.save();
book.find();
book.findById();
*/