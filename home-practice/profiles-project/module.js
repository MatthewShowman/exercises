// const fs = require('fs');
const profiles = require('./profiles');


function getObj(arr, nameKey) {
    let performer = {};
    for (var i = 0; i < arr.length; i++) {
        if (this.name === nameKey) {
            performer = arr[i];
        }
    }
    console.log(performer.searchKey);
    return performer.searchKey;
}

getObj(profiles, 'Katana');
// module.exports = getInfo();