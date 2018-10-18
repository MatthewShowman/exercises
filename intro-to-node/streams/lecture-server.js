const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    fs.readFile(__dirname + '/big.file', 'utf8', (err, data) => {
        res.write(data);
        res.end();
    });
});

server.listen(4545);
console.log('Listening on 4545...');