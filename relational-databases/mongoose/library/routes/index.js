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
    try {
        let newBook = await libraryServices.addNewBook(req.body);
        res.status(200).json(newBook);
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

// router.get('/', async (req, res) => {
//     try {

//     }
//     catch {
//         console.log(error);
//         res.status(500).send('Internal service error');
//     }
// });

// router.get('/', async (req, res) => {
//     try {

//     }
//     catch {
//         console.log(error);
//         res.status(500).send('Internal service error');
//     }
// });

// router.post('/', async (req, res) => {
//     try {

//     }
//     catch {
//         console.log(error);
//         res.status(500).send('Internal service error');
//     }
// });

// router.delete('/', async (req, res) => {
//     try {

//     }
//     catch {
//         console.log(error);
//         res.status(500).send('Internal service error');
//     }
// });

// router.put('/', async (req, res) => {
//     try {

//     }
//     catch {
//         console.log(error);
//         res.status(500).send('Internal service error');
//     }
// });

// router.patch('/', async (req, res) => {
//     try {

//     }
//     catch {
//         console.log(error);
//         res.status(500).send('Internal service error');
//     }
// });

module.exports = router;