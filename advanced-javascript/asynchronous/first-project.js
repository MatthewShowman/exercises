const fs = require('fs');

fs.readFile(__dirname + '/file-example2.txt', 'utf8', (err, data) => {
    if (err) { console.log(err.message); return; }
    console.log(data);
    return console.log('DONE READING FILE');
});

