const fs = require('fs');
const zlib = require('zlib');

let buf1 = Buffer.from('Buffer Demo');

console.log(buf1);
console.log(buf1.toString());
console.log(buf1.toJSON());

buf1.write(' lecture is awesome?');
console.log(buf1.toString());

let fileName = __dirname + '/big.file';

let readStream = fs.createReadStream(fileName, { encoding: 'utf8', highWaterMark: 2 * 1024 });

// readStream.on('data', (chunk) => {
//     console.log(chunk.length);
//     console.log(chunk);
// });


let writeStream = fs.createWriteStream(fileName + '.copy');
let compressedWriteStream = fs.createWriteStream(fileName + '.zip');
let gzip = zlib.createGzip();

readStream.pipe(writeStream);
readStream.pipe(gzip).pipe(compressedWriteStream);

// readStream.on('data', chunk => {
//     fileData += chunk;
// })


