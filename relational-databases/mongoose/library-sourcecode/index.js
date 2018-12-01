const express = require('express');
const mongodb = require('./mongodb.utils');
const libraryService = require('./library.service');

const app = express();
const jsonParser = express.json();

const PORT = process.env.PORT || 8080;

mongodb.createEventListeners();
mongodb.connect();

app.get('/', (req, res) => {
  res.status(200).send('Healthcheck!');
});

app.get('/books', async (req, res) => {
  try {
    let booksFetched = await libraryService.fetchAllBooks();
    res.status(200).json(booksFetched);
  }
  catch (error) {
    console.log(error)
    res.status(500).send('Internal service error');
  }
});

app.get('/books/:title', async (req, res) => {
  let bookTitle = req.params.title;

  try {
  let bookFetched = await libraryService.fetchBookByTitle(bookTitle);
    if (!bookFetched) {
      res.status(404).send();
    } else {
      res.status(200).json(bookFetched);
    }
  }
  catch(error) {
    console.log(error);
    res.status(500).send('Internal service error');
  }
});

app.post('/books', jsonParser, async (req, res) => {
  let bookData = req.body.book;
  try {
    let bookSaved = await libraryService.saveBook(bookData);
    res.status(200).json(bookSaved);
  }
  catch (error) {
    console.log(error)
    res.status(500).send('Internal service error');
  }
});

app.put('/books/:id', jsonParser, async (req, res) => {
  let bookData = req.body.book;

    try {
      let bookUpdated = await libraryService.updateBook(req.params.id, bookData)
      res.status(200).json(bookUpdated);
    }
    catch(error) {
      console.log(error)
      res.status(500).send('Internal service error');
  }
});

app.get('/authors', (req, res) => {
  libraryService.fetchAllAuthors().then((authorsFetched) => {
    res.status(200).send(authorsFetched);
  }).catch((error) => {
    res.status(500).send(error);
  });
});

app.get('/author', (req, res) => {
  const firstname = req.query.firstname;
  const lastname = req.query.lastname;

  if (firstname) {
    libraryService.fetchAuthorsByFirstName(firstname).then((authorsFetched) => {
      res.status(200).send(authorsFetched);
    }).catch(function (error) {
      res.status(500).send(error);
    });
  } else {
    libraryService.fetchAuthorsByLastName(lastname).then((authorsFetched) => {
      res.status(200).send(authorsFetched);
    }).catch(function (error) {
      res.status(500).send(error);
    });
  }
});

app.post('/author', jsonParser, (req, res) => {
  var authorData = req.body.author;

  libraryService.saveAuthor(authorData).then((authorSaved) => {
    res.status(200).send(authorSaved);
  }).catch(function (error) {
    res.status(500).send(err);
  });
});

app.put('/author', jsonParser, (req, res) => {
  var authorData = req.body.author;

  libraryService.updateAuthor(authorData).then((authorUpdated) => {
    res.status(200).send(authorUpdated);
  }).catch((error) => {
    res.status(500).send(error);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
