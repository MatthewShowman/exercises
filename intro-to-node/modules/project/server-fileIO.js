// server-fileIO.js
/* create a server that... 
    creates a file,
    appends a message to it,
    then returns the read result of this file when an http request is made to the server
*/
const IO = require('./fileIO-2');
const http = require('http');

let fileName = 'http-attempt.txt';
let initialText = 'This is the greatest text.';
let appendedText = ' This is even better text';


const server = http.createServer(function(req, res) {
   createAppendRead(fileName, initialText, appendedText).then((data) => {
       res.write(data);
       res.end();
   });

})

server.listen(8888);
console.log('Server listening on port 8888...');

async function createAppendRead(file, text1, text2) {
    try {
        await IO.createFile(file, text1);
        await IO.appendFile(file, text2);
        let temp = await IO.readFile(file);
        return temp;
    } catch (err) {
        console.log(err);
    }
}