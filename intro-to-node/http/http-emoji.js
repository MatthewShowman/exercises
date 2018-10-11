const http = require('http');
const emoji = require('node-emoji');

const server = http.createServer((req, res) => {
    let pizza = emoji.get('pizza');
    // let html = `
    // <html>
    //     <head>
    //         <meta charset='UTF-8'>
    //     </head>
    //     <body>
    //         ${pizza}
    //     </body>
    // </html>
    // `
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.write(JSON.stringify({emoji: pizza}));
    res.end();
});

server.listen(8001);
console.log('Server is listening on port 8001...');