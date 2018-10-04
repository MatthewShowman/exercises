const fs = require('fs');

fs.writeFile(__dirname + '/written-file.txt', 'This is all that I want to write.', 'utf8', (err) => {
    if (err) {console.log(err.message); return;}
    return console.log('DONE WRITING FILE');
});