const http = require('http');
const fs = require('fs');
let displayString = require('./text.txt');

let server = http.createServer(function(req, res) {
    res.write(displayString);
    res.end();
});

server.listen(fs.readFileSync('./port.conf','utf8'));
console.log('Listening at port 4321...');