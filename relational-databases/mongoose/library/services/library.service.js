const Author = require('../models/author.model'); // capital "A" so that is can be treated as a class
const Book = require('../models/book.model'); // capital "B" so that is can be treated as a class


// AUTHOR FUNCTIONS

function fetchAllAuthors() {
    return Author.find({}).populate('books');
}

function fetchAuthorsByFirstname(firstname) {
    return Author.find({firstName: firstname}).populate('books');
}

function fetchAuthorsByLastname(lastname) {
    return Author.find({lastName: lastname}).populate('books');
}

function fetchAuthorsByFullName(firstname, lastname) {
    return Author.find({firstName: firstname, lastName: lastname}).populate('books');
}

function fetchAuthorsById(id) {
    return Author.find({_id: id}).populate('books');
}

function createNewAuthor(firstName, lastName, bookId) {
    let newAuthor = new Author(
        {
            firstName: firstName,
            lastName: lastName,
            books: [bookId],
        }
    );
    // let addedAuthor = newAuthor.save();
    // return addedAuthor;
    return newAuthor;
}

function updateAuthorNameById(id, nameJSON) {
    let authorToUpdate = Author.findByIdAndUpdate(id, nameJSON, { new: true });
    return authorToUpdate;
}

function addBooksToAuthorById(id, titleId) {
    let authorToUpdate = Author.find({_id: id});
    let booksArray = authorToUpdate.books;
    let newBooksArray = booksArray.push(titleId);
    let updatedAuthorProfile = Author.findByIdAndUpdate(id, {books: newBooksArray}, { new: true });
    return updatedAuthorProfile;
}

// BOOK FUNCTIONS

function fetchAllBooks() {
    return Book.find({}).populate('author');
}

function fetchBookByTitle(title) {
    return Book.find({title: title}).populate('author');
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
    let bookToUpdate = Book.findByIdAndUpdate(id, updateJSON, { new: true });
    return bookToUpdate;
}

module.exports = {
    fetchAllAuthors,
    fetchAuthorsByFirstname,
    fetchAuthorsByLastname,
    fetchAuthorsByFullName,
    fetchAuthorsById,
    createNewAuthor,
    updateAuthorNameById,
    addBooksToAuthorById,

    fetchAllBooks,
    fetchBookByTitle,
    createNewBook,
    updateBookById
}