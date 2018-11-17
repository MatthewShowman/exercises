// const mongoose = require('mongoose');
const Puppy = require('./models/puppy.model');
const mongodb = require('./mongodb.utils')

mongodb.createEventListeners();
mongodb.connect();

// mongoose.connect('mongodb://localhost/backend-class', { useNewUrlParser: true }); //moved to ongodb.utils.js

// const db = mongoose.connection;

// db.once('open', () => { //moved to ongodb.utils.js
//     console.log('Connected');

// const puppySchema = mongoose.Schema({ // Moved to puppy.model.js
//     name: String,
//     breed: String,
//     age: Number,
//     likes: [String],
//     dislikes: [String]
// });

// const Puppy = mongoose.model('Puppy', puppySchema);

const cujo = new Puppy({
    name: 'Cujo',
    breed: 'St Bernard',
    age: 5,
    likes: ['water', 'blood'],
    dislikes: ['cars', 'rabies'],
});

cujo
    .save()
    .then( result => {
        console.log("Created", result);
        // return result.remove();
    })
    // .then( result => console.log("Removed", result)
    // )
    .catch( error => console.log(error))

Puppy.findOne( {name: "Cujo"} )
    .then( result => console.log(result))
Puppy.findOneAndDelete( { _id: "5bf079f683adaa45dec1c2b3" } )
    .then( result => console.log('Deleted puppy', result))

// }); //moved to ongodb.utils.js

// db.on('error', () => { //moved to ongodb.utils.js
//     console.log('Error connecting to the database')
// });

