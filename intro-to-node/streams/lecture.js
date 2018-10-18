const fs = require('fs');

const writeStream = fs.createWriteStream(__dirname + '/big.file');

for (let i = 0; i <= 1000000; i++) {
    writeStream.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque volutpat ac tincidunt vitae semper quis lectus nulla. In cursus turpis massa tincidunt. Purus gravida quis blandit turpis cursus in hac habitasse platea. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Odio euismod lacinia at quis risus sed vulputate odio ut. Ornare arcu odio ut sem nulla. Venenatis cras sed felis eget velit aliquet sagittis. Fusce id velit ut tortor pretium viverra suspendisse potenti. Orci dapibus ultrices in iaculis nunc sed augue.\n');
}
writeStream.end();