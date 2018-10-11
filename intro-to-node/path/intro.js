const path =require('path');

/*
path.basename
path.dirname
path.resolve
*/

let fileName = path.basename('~/dev/node-projects/script.js'); //script.js
console.log(fileName);


let dirName = path.dirname('~/dev/node-projects/script.js'); //node-projects
console.log(dirName);


let output = path.resolve('sub-dir', 'sub-dir', 'script.js'); //create an absolute path, resolved from right to left
console.log(output);