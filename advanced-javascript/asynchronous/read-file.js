const fs = require('fs');

// console.log(__dirname);


// synchronous read
let contents = fs.readFileSync(__dirname + '/file-example.txt', { encoding: 'utf8'});
console.log(contents);



// asynchronous read    -------> NOTICE THAT THE console.log IS INSIDE THE FUNCTION
// fs.readFile(path[, options], callback)
fs.readFile(__dirname + '/file-example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(data);
    console.log(err);
});