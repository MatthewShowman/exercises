const express = require('express');
const mongodb = require('./mongodb.utils');
const router = require('./routes');
// const Author = require('./models/author.model');
// const Book = require('./models/book.model');

const app = express();

app.use(express.json());
app.use('/', router);

mongodb.createEventListeners();
mongodb.connect();

// let author = new Author({
//     firstName: "Emily",
//     lastName: "Bronte"
// });
// author.save().then(
//     author => {
//         console.log(author);
//     }
// );

// Author.findOne({ firstName: "John", lastName: "Steinbeck" }).then(author => {
//     let newBook = new Book({
//         title: "Grapes of Wrath",
//         author: author._id
//     });

//     return newBook.save(); //returns a promise
// }).then(book => {
//     console.log(book); //obtains the promise
//     // mongodb.disconnect();
// })

app.listen('3000', () => console.log('listening on port 3000'));