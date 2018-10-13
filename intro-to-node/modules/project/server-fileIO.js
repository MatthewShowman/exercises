// server-fileIO.js
/* create a server that... 
    creates a file,
    appends a message to it,
    then returns the read result of this file when an http request is made to the server
*/
const IO = require('./fileIO');

// IO.deleteFile('test.txt');

async function createAppendRead() {
    try {
        await IO.createFile('test.txt', 'This is a new file.');
        await IO.readFile('test.txt');
        await IO.appendFile('test.txt', ' This is some appended data.');
        await IO.readFile('test.txt');
    } catch (err) {
        console.log(err);
    }

}

createAppendRead();
