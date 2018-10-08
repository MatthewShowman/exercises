let http = require('http');
let moduleFile = require('./module.js');

let server = http.createServer(function(req, res) {
    
    moduleFile.createFile('filename.txt')
    .then(() => moduleFile.appendFile('filename.txt', 'If I had a million dollars'))
    .then(() => moduleFile.readfile('filename.txt'))
    .then(fileData => {
        res.write(fileData);
        res.end();
    })
    .catch(err => console.log(err));
});

server.listen(1234);
console.log('Server listening on port 1234');