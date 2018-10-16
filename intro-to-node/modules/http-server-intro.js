// Server to read and output.

let http = require('http');
let fs = require('fs');

// let server = http.createServer(function (req, res) {
//   fs.readFile('./hello-world.txt', 'utf-8', function(err, data) {
//       res.write(data);
//       res.end();
//   })

// });

// server.listen(3000);
// console.log('Server listening on port 3000...');


// Server to create, read and write

const server = http.createServer(function (req, res) {
    fs.writeFile('./filename.txt', '', (err) => {
        if (err) {
            console.log(err);
        }
        fs.appendFile('./filename.txt', 'some stuff', (err) => {
            if (err) {
                console.log(err);
            }
            fs.readFile('./filename.txt', 'utf-8', (err, fileData) => {
                res.write(fileData);
                res.end();
            });
        });
    });
});


server.listen(fs.readFileSync('./port.conf', 'utf8'));
console.log('Server listening on port 1818...');