const fs = require('fs');


function createFile(fileName) {

}

function readFile(fileName) {
    fs.readFile(`${__dirname}/${fileName}`, 'utf8', (err, data) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(data);
        console.log(err);
    });
}

function appendFile() {

}

function deleteFile() {

}

module.exports = {
    createFile,
    readFile,
    appendFile,
    deleteFile,
}