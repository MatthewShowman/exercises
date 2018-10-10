const fs = require('fs');
const http = require('http');
// const profileModule = require('./test-profiles.txt');

let server = http.createServer(function(req,res) {
    fs.readFile('./test-profiles.txt', 'utf-8', (err, fileData) => {
        res.write(fileData);
        res.end();
    });
});

server.listen(6969);
console.log('Server listening on port Double 69...');