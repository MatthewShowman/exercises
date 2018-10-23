const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    const readStream = fs.createReadStream(__dirname + '/big.file', 'utf8');
    readStream.pipe(res);
});

server.listen(4545);
console.log('Listening on 4545...');