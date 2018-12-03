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
        if (req.query.lastName && req.query.firstName) {
            authors = await libraryServices.fetchAuthorsByFullName(req.query.firstName, req.query.lastName);
        } else if (req.query.id) {
            authors = await libraryServices.fetchAuthorsById(req.query.id);
        } else if (req.query.firstName) {
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
    let newAuthor;
    let {firstName, lastName, title} = req.body;
    let book;
    let authorId;
    let bookId;
    
    try {
        // 1. check for book
        // 2. create a new book if needed
        // 3. get book id
        if (await libraryServices.fetchBookByTitle(title)) {
            book = await libraryServices.fetchBookByTitle(title);
        } else {
            let createThisBook = await libraryServices.createNewBook(title);
            book = await createThisBook.save();
        }

        bookId = book._id;

        // 4. create a new author
        // 5. insert the book id into the author obj
        let createThisAuthor = await libraryServices.createNewAuthor(firstName, lastName, bookId);
        newAuthor = await createThisAuthor.save();
        
        // 6. get the author id
        authorId = newAuthor._id;
        
        // 7. insert the author id into the book obj
        book.author.push(authorId);
        await book.save(); 
        
        // 8. res out the book with populated author
        res.status(200).json(await libraryServices.fetchAuthorsById(authorId));
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal service error');
    }
});

router.patch('/authors/:id', async (req, res) => {
    let updatedAuthor;

     try {
        if (req.body.firstName || req.body.lastName) {
            updatedAuthor = await libraryServices.updateAuthorNameById(req.params.id, req.body);
        } else {
            res.status(500).send('Invalid update parameters');
        }
        
        let savedAuthor = await updatedAuthor.save();
        res.status(200).json(savedAuthor);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

router.delete('/authors/:id', async (req, res) => {
    try {
        let deletedAuthor = await libraryServices.deleteAuthorById(req.params.id);
        res.status(200).send(`deleted ${deletedAuthor}`);
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
        } else if (req.query.id) {
            books = await libraryServices.fetchBookById(req.query.id);
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
    let newBook;
    let {title, author: {firstName, lastName}} = req.body;
    let author;
    let authorId;
    let bookId;
    
    try {
        // 1. check for author
        // 2. create a new author if needed
        // 3. get author id
        if (await libraryServices.fetchAuthorsByFullName(firstName, lastName)) {
            author = await libraryServices.fetchAuthorsByFullName(firstName, lastName);
        } else {
            let createThisAuthor = await libraryServices.createNewAuthor(firstName, lastName);
            author = await createThisAuthor.save();
        }

        authorId = author._id;

        // 4. create a new book
        // 5. insert the author id into the book obj
        let createThisBook = await libraryServices.createNewBook(title, authorId);
        newBook = await createThisBook.save();
        
        // 6. get the book id
        bookId = newBook._id;
        
        // 7. insert the book id into the author obj
        author.books.push(bookId);
        await author.save(); 
        
        // 8. res out the book with populated author
        res.status(200).json(await libraryServices.fetchBookById(bookId));
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
            let savedBook = await updatedBook.save();
            res.status(200).json(savedBook);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

// Delete a book

router.delete('/books/:id', async (req, res) => {
    try {
        let deletedBook = await libraryServices.deleteBookById(req.params.id);
        res.status(200).send(`deleted ${deletedBook}`);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal service error");
    }
});

module.exports = router;