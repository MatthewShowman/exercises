const fs = require('fs');
const zlib = require('zlib');

let zipFilename = './frankenstein.txt.zip';
let zippedVid = './airheads.mp4.zip';

let readZipStream = fs.createReadStream(zipFilename);
let readZipVidStream = fs.createReadStream(zippedVid);
let gunzipStream = zlib.createGunzip();
let writeNewStream = fs.createWriteStream('./frankenstein.txt', 'utf8');
let writeNewVidStream = fs.createWriteStream('./airheads.mp4');

readZipStream.pipe(gunzipStream).pipe(writeNewStream);
readZipVidStream.pipe(gunzipStream).pipe(writeNewVidStream);

// zlib.gunzip(gzipBuffer, function(err, result) {
//     if(err) return console.error(err);

//     console.log(result);
// });
