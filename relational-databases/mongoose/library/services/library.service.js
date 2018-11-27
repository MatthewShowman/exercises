const Author = require('../models/author.model'); // capital "A" so that is can be treated as a class
const Book = require('../models/book.model'); // capital "B" so that is can be treated as a class

function fetchAllBooks() {
    return Book.find({}).populate('author');
}

function fetchAllAuthors() {
    return Author.find({}).populate('book');
}

function fetchAuthorsByFirstname(firstName) {
    return Author.find({firstName: firstName}).populate('book');
}

function fetchAuthorsByLastname(lastName) {
    return Author.find({lastName: lastName}).populate('book');
}

function addNewAuthor(authorObject) {
    let newAuthor = new Author(req.body);
    let addedAuthor = newAuthor.save();
    return addedAuthor;
}

module.exports = {
    fetchAllBooks,
    fetchAllAuthors,
    fetchAuthorsByFirstname,
    fetchAuthorsByLastname,
    addNewAuthor
}