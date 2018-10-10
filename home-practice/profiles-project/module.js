const fs = require('fs');
const profiles = require('./profiles.js');



function getInfo(arr, key) {
    fs.readFile('./profile.txt', 'utf-8', (err, fileData) => {
        res.write(fileData);
        res.end();
}