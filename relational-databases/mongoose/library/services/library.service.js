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

function createNewAuthor(firstName, lastName, books) {
    let newAuthor = new Author(
        {
            firstName: firstName,
            lastName: lastName,
            books: [books],
        }
    );
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

function createNewBook(title, firstName, lastName) {
    let newBook = new Book(
        {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName,
            }
        }
    );
    let addedBook = newBook.save();
    return addedBook;
}

function updateBookById(data, id) {
    let bookToUpdate = Book.findById(id);
    if (infoToReplace.params.title) {
        updateBook.title = infoToReplace.title;
    } else if (infoToReplace.params.author) {
        updateBook.author = infoToReplace.author;
    } else {
        return null;
    }
    bookToUpdate.title = data.title;
    return bookToUpdate;
}

module.exports = {
    fetchAllAuthors,
    fetchAuthorsByFirstname,
    fetchAuthorsByLastname,
    fetchAuthorsByFullName,
    createNewAuthor,
    fetchAllBooks,
    fetchBookByTitle,
    createNewBook
    // updateBookTitle
}