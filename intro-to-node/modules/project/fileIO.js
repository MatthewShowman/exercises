const fs = require('fs');


function createFile(fileName, data = '') {
    fs.writeFile(fileName, data, (err) => {
        if (err); {
            console.log(err);
            return;
        }
        console.log(fileName + ' has been created.');
    });
}

function readFile(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
}

function appendFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(fileName + ' has been appended');
    });
}

function deleteFile(fileName,) {
    fs.unlink(fileName, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
    console.log(fileName + ' has been deleted.');
}

module.exports = {
    createFile,
    readFile,
    appendFile,
    deleteFile,
}