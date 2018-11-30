const router = require('express').Router();
const Book = require('../models/book.model');
const Author = require('../models/author.model');
const libraryServices = require('../services/library.service');

router.get('/', (req, res) => {
    res.status(200).send("Welcome to the library!");
});

// AUTHOR ROUTES

//  search for an author by name

router.get('/authors', async (req, res) => {
    let authors;

    try {
        if (req.query.firstName) {
            authors = await libraryServices.fetchAuthorsByFirstname(req.query.firstName);
        } else if (req.query.lastName) {
            authors = await libraryServices.fetchAuthorsByLastname(req.query.lastName);
        } else if (req.query.lastName && req.query.firstName) {
            authors = await libraryServices.fetchAuthorsByFullName(req.query.firstName, req.query.lastName);
        } else if (req.query.id) {
            authors = await libraryServices.fetchAuthorsById(req.query.id);
        } else {
            authors = await libraryServices.fetchAllAuthors();
        }

        res.status(200).json(authors);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal service error');
    }
});

// Add a new author to the library

router.post('/authors', async (req, res) => {
    try {
        let newAuthor = await libraryServices.addNewAuthor(req.body);
        res.status(200).json(newAuthor);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal service error');
    }
});

router.patch('/authors/:id', async (req, res) => {
    try {
            let updatedAuthor = await Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(200).json(updatedAuthor);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

// BOOK ROUTES

//  search for a book by title

router.get('/books', async (req, res) => {
    let books;

    try {
        if (req.query.title) {
            books = await libraryServices.fetchBookByTitle(req.query.title);
        } else {
            books = await libraryServices.fetchAllBooks();
        }

        res.status(200).json(books);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal service error');
    }
});

// Add a new book to the library

router.post('/books', async (req, res) => {
    // 1. check for author
    // 2. create a new author if needed
    // 3. get author id
    // 4. create a new book
    // 5. insert the author id into the book obj
	// 6. get the book id
    // 6. insert the book id into the author obj
    // 7. res out the book with populated author
    
    let newBook = req.body;
    let {title, author: {firstName, lastName}} = req.body;
    let authorId;
    let bookToSave;
    
    try {
        // Set the author's ID code
        if (await libraryServices.fetchAuthorsByFullName(firstName, lastName)) {
            let existingAuthor = await libraryServices.fetchAuthorsByFullName(firstName, lastName);
            authorId = existingAuthor[0]._id;
        } else {
            let newAuthor = await libraryServices.createNewAuthor(firstName, lastName, title);
            authorId = newAuthor._id
        }

        // Assign the 
        newBook.author = authorId;
        bookToSave = await libraryServices.createNewBook(title, firstName, lastName);
        let returnThisBook = await libraryServices.fetchBookByTitle(title);
        res.status(200).json(returnThisBook);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal service error');
    }
});

// Update a book

router.patch('/books/:id', async (req, res) => {
    try {
            let updatedBook = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(200).json(updatedBook);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

module.exports = router;