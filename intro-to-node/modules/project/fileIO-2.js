const fs = require('fs');
const path = require('path');


function createFile(fileName, data = '') {
    return new Promise (function(resolve, reject) {
        fs.writeFile(path.join(__dirname,fileName), data, (err) => {
            if (err) {
                reject(new Error("Error with createFile"));
            }
            console.log(fileName + ' has been created.');
            resolve();
        });
    });
}

function readFile(fileName) {
    return new Promise (function(resolve, reject) {
        fs.readFile(path.join(__dirname,fileName), 'utf8', (err, data) => {
            if (err) {
                reject(new Error("Error with readFile"));
            }
            console.log(data);
            resolve(data);
        });
    });
}

function appendFile(fileName, data) {
    return new Promise (function(resolve, reject) {
        fs.appendFile(path.join(__dirname,fileName), data, (err) => {
            if (err) {
                reject(new Error("Error with appendFile"));
            }
            console.log(fileName + ' has been appended');
            resolve();
        });
    });
}

function deleteFile(fileName,) {
    return new Promise (function(resolve, reject) {
        fs.unlink(path.join(__dirname,fileName), (err) => {
            if (err) {
                reject(err);
            }
            console.log(fileName + ' has been deleted.');
            resolve();
        });    
    });
}

module.exports = {
    createFile,
    readFile,
    appendFile,
    deleteFile,
}