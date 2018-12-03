const Author = require('../models/author.model'); // capital "A" so that is can be treated as a class
const Book = require('../models/book.model'); // capital "B" so that is can be treated as a class


// AUTHOR FUNCTIONS

function fetchAllAuthors() {
    return Author.find({}, '_id firstName lastName').populate('books', '_id title');
}

function fetchAuthorsByFirstname(firstname) {
    return Author.find({firstName: firstname}, '_id firstName lastName').populate('books', '_id title');
}

function fetchAuthorsByLastname(lastname) {
    return Author.find({lastName: lastname}, '_id firstName lastName').populate('books', '_id title');
}

function fetchAuthorsByFullName(firstname, lastname) {
    return Author.findOne({firstName: firstname, lastName: lastname}, '_id firstName lastName').populate('books', '_id title');
}

function fetchAuthorsById(id) {
    return Author.findOne({_id: id}, '_id firstName lastName').populate('books','_id title');
}

function createNewAuthor(firstName, lastName, bookId) {
    let newAuthor = new Author(
        {
            firstName: firstName,
            lastName: lastName,
            books: [],
        }
    );
    // let addedAuthor = newAuthor.save();
    // return addedAuthor;
    return newAuthor;
}

function updateAuthorNameById(id, nameJSON) {
    return Author.findByIdAndUpdate(id, nameJSON, { new: true }).populate('books','_id title');;
}

function addBooksToAuthor(authorInfo, titleId) {
    let authorToUpdate = Author.findOne({_id: id});
    authorToUpdate
    let newBooksArray = booksArray.push(titleId);
    let updatedAuthorProfile = Author.findByIdAndUpdate(id, {books: newBooksArray}, { new: true });
    let updatedAuthorProfile = authorInfo.books.push(titleId);
    return updatedAuthorProfile;
}

function deleteAuthorById(id) {
    return Author.findOneAndDelete({_id: id});
}




// BOOK FUNCTIONS

function fetchAllBooks() {
    return Book.find({}, '_id title').populate('author', '_id firstName lastName');
}

function fetchBookByTitle(title) {
    return Book.findOne({title: title}).populate('author', '_id firstName lastName');
}

function fetchBookById(id) {
    return Book.findOne({_id: id}, '_id title').populate('author', '_id firstName lastName');
}

function createNewBook(title, AuthorId) {
    let newBook = new Book(
        {
            title: title,
            author: AuthorId
        }
    );
    // let addedBook = newBook.save();
    // return addedBook;
    return newBook;
}

function updateBookById(updateJSON, id) {
    return Book.findByIdAndUpdate(id, updateJSON, { new: true });
}

function deleteBookById(id) {
    return Book.findOneAndDelete({_id: id});
}

module.exports = {
    fetchAllAuthors,
    fetchAuthorsByFirstname,
    fetchAuthorsByLastname,
    fetchAuthorsByFullName,
    fetchAuthorsById,
    createNewAuthor,
    updateAuthorNameById,
    addBooksToAuthor,
    deleteAuthorById,

    fetchAllBooks,
    fetchBookByTitle,
    fetchBookById,
    createNewBook,
    updateBookById,
    deleteBookById
}