const mongodb = require('./mongodb.utils');
const Author = require('./models/author.model');
const Book = require('./models/book.model');

module.exports = {
  fetchAllBooks,
  fetchAllAuthors,
  fetchAuthorsByFirstName,
  fetchAuthorsByLastName,
  fetchBookByTitle,
  saveBook,
  updateBook,
  saveAuthor,
  updateAuthor
}

function fetchAllBooks() {
  return Book.find({}).populate('author');
}

function fetchAllAuthors() {
  return Author.find({}).populate('books').exec();
}

function fetchAuthorsByFirstName(firstname) {
  return Author.find({ firstname: firstname }).populate('books').exec();
}

function fetchAuthorsByLastName(lastname) {
  return Author.find({ lastname: lastname }).populate('books').exec();
}

async function fetchBookByTitle(title) {
  const searchResult = await Book.findOne({ title: title }, 'title author').populate('author', 'firstname lastname');
  let bookToReturn = {};
  if (searchResult && searchResult.length > 0) {
    let bookFound = searchResult[0];
    bookToReturn = {
      _id: bookFound.id,
      title: bookFound.title,
      author: {
        firstname: bookFound.author.firstname,
        lastname: bookFound.author.lastname
      }
    };
  }
  return searchResult;
}

async function saveBook(bookToSave) {
  let authorInfo;
  let bookInfo;

  let authorSearchResult = await Author.find({
    firstname: bookToSave.author.firstname,
    lastname: bookToSave.author.lastname
  });
  
  if (authorSearchResult && authorSearchResult.length > 0) {
    authorInfo = authorSearchResult[0];
  } else {
    let author = new Author({
      firstname: bookToSave.author.firstname,
      lastname: bookToSave.author.lastname
    });

    authorInfo = await author.save();
  }

  let book = new Book({
    title: bookToSave.title,
    author: authorInfo._id
  });

  bookInfo = await book.save();
  
  authorInfo.books.push(bookInfo._id);
  let updatedAuthorInfo = await authorInfo.save();

  const infoToReturn = {
    author: updatedAuthorInfo,
    book: bookInfo
  };

  return infoToReturn;

  // return Author.find({ firstname: bookToSave.author.firstname, lastname: bookToSave.author.lastname }).exec().then((authorSearchResult) => {
  //   if (authorSearchResult && authorSearchResult.length > 0) {
  //     return authorSearchResult[0];
  //   } else {
  //     let author = new Author({
  //       firstname: bookToSave.author.firstname,
  //       lastname: bookToSave.author.lastname
  //     });

  //     return author.save();
  //   }
  // }).then((author) => {
  //   authorInfo = author;

  //   let book = new Book({
  //     title: bookToSave.title,
  //     author: authorInfo._id
  //   });

  //   return book.save();
  // }).then((bookSaved) => {
  //   bookInfo = bookSaved;

  //   authorInfo.books.push(bookInfo._id);
  //   return authorInfo.save();
  // }).then((updatedAuthorInfo) => {
  //   const infoToReturn = {
  //     author: updatedAuthorInfo,
  //     book: bookInfo
  //   };

  //   return infoToReturn;
  // });
}

function updateBook(id, bookToUpdate) {
  return Book.findOneAndUpdate({_id: id}, bookToUpdate, {new: true});
}

function saveAuthor(authorToSave) {
  var authorInfo;
  var bookInfo;

  var author = new Author({
    firstname: authorToSave.firstname,
    lastname: authorToSave.lastname
  });

  return author.save().then((authorSaved) => {
    authorInfo = authorSaved;

    if (authorToSave.books) {
      const addBooks = [];

      authorToSave.books.forEach((book) => {
        const bookToSave = {
          "title": book,
          "author": {
            "firstname": authorInfo.firstname,
            "lastname": authorInfo.lastname
          }
        };

        addBooks.push(saveBook(bookToSave));
      });

      return Promise.all(addBooks);
    } else {
      return Promise.resolve(authorInfo);
    }
  }).then(() => {
    return Author.find({ firstname: authorInfo.firstname, lastname: authorInfo.lastname }).populate('books').exec();
  });
}

function updateAuthor(authorToUpdate) {
  return Author.findById(authorToUpdate.id).then((authorFetched) => {
    if (authorToUpdate.firstname) {
      authorFetched.firstname = authorToUpdate.firstname;
    }

    if (authorToUpdate.lastname) {
      authorFetched.lastname = authorToUpdate.lastname;
    }

    return authorFetched.save();
  });
}
