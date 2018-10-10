const http = require('http');

let server = http.createServer(function(req, res) {
    res.write('I am really struggling...');
    res.end();
});

server.listen(1234);
console.log('Listening on port 1234...');