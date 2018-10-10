//

const emoji = require('node-emoji');

let emojiArray = [];

for (let i = 0; i < 10; i++) {
    randomEmoji = emoji.random().emoji;
    emojiArray.push(randomEmoji);
}

function emojiPrinter(arr) {
    for (let i = 0; i < 10; i++) {
        console.log(arr[i])
    }
}

emojiPrinter(emojiArray);


/// forEach