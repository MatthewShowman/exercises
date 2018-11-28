const Author = require('../models/author.model'); // capital "A" so that is can be treated as a class
const Book = require('../models/book.model'); // capital "B" so that is can be treated as a class


// AUTHOR FUNCTIONS

function fetchAllAuthors() {
    return Author.find({}).populate('book');
}

function fetchAuthorsByFirstname(firstName) {
    return Author.find({firstName: firstName}).populate('book');
}

function fetchAuthorsByLastname(lastName) {
    return Author.find({lastName: lastName}).populate('book');
}

function addNewAuthor(authorJSON) {
    let newAuthor = new Author(authorJSON);
    let addedAuthor = newAuthor.save();
    return addedAuthor;
}

// BOOK FUNCTIONS

function fetchAllBooks() {
    return Book.find({}).populate('author');
}

function fetchBookByTitle(title) {
    return Book.find({title: title}).populate('author');
}

function addNewBook(bookJSON) {
    let newBook = new Book(bookJSON);
    let addedBook = newBook.save();
    return addedBook;
}

function updateBookTitle(titleJSON, id) {
    let bookToUpdate = Book.find({_id: id});
    bookToUpdate.title = titleJSON.title;


    // if (infoToReplace.params.title) {
    //     updateBook.title = infoToReplace.title;
    // } else if (infoToReplace.params.author) {
    //     updateBook.author = infoToReplace.author;
    // } else {
    //     return null;
    // }

    return bookToUpdate;
}

module.exports = {
    fetchAllBooks,
    fetchAllAuthors,
    fetchAuthorsByFirstname,
    fetchAuthorsByLastname,
    addNewAuthor,
    fetchBookByTitle,
    addNewBook
    // updateBookTitle
}