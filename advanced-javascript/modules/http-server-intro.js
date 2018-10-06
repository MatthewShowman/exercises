const fs = require('fs');
const http = require('http');

http.createServer(onRequest).listen(3000);
console.log(`Server is now running...`);

function onRequest(request, response) {
    console.log(`A user made a request: ${request.url}`);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // fs.readFile(__dirname + '/hello-world.txt', 'utf8', (err, data) => {
    //     if (err) {
    //         console.log(err.message);
    //         return;
    //     }
    //     console.log(data);
    //     console.log(err);
    // });
    response.write(`Hello World!`);
    response.end();
}


