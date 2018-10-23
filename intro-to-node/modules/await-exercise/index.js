const http = require('http');
const editFile = require('./module');
const multiply = require('./multiply-module');

let emptyFile = 'empty-file.txt';
let text = 'This is a practice in class.'

const server = http.createServer(async function(req,res) {
    let data = await createAppendReadWrite(emptyFile, text);

    res.write(data);
    res.end();
});

server.listen(1111);
console.log('Server is listening on port 1111...')

async function createAppendReadWrite(fileName, message) {
    try {
        await editFile.createFile(fileName);
        await editFile.appendFile(fileName,message);
        let result = await editFile.readFile(fileName);
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

async function multiplyFiveTimes() {
    let fiveCalls = [];
    
}