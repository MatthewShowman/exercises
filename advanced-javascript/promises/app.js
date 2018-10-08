let database = require('./database.js');

database.getUser('Spruce')
.then((user) => {
    console.log(user);
    return database.getUserEmail(user.firstName);
})
.then((userEmail) => {
    console.log(userEmail);
})
.catch((err) => {
    console.log(err);
});



let userPromises = [];

userPromises.push(database.getUser('Spruce'));
userPromises.push(database.getUser('John'));
userPromises.push(database.getUser('Leslie'));
userPromises.push(database.getUser('Alex'));

Promise.all(userPromises)
    .then(data => console.log(data));


// The result of running =>
/*
{ firstName: 'Spruce', lastName: 'Feinstein' }
[ { firstName: 'Spruce', lastName: 'Feinstein' },
  { firstName: 'John', lastName: 'Snow' },
  { firstName: 'Leslie', lastName: 'Palmer' },
  { firstName: 'Alex', lastName: 'Martinez' } ]
sprucefeinstein@gmail.com
*/

//Question: Why was the getUserEmail function executed and logged last?