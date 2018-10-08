let cleanRoom = function () {
 return new Promise (function(resolve, reject) {
    resolve('cleaned the room');
 });
};

let removeGarbage = function (message) {
    return new Promise (function(resolve, reject) {
        resolve(message + ', removed garbage');
    });
};

let winIceCream = function (message) {
    return new Promise (function(resolve, reject) {
        resolve(message + ', won ice cream');
    });
};

cleanRoom()
    .then(result => removeGarbage(result))
    .then(result => winIceCream(result))
    .then(result => console.log(`finished: ${result}`));


Promise.all([cleanRoom(), removeGarbage(), winIceCream()])
    .then(() => console.log('all finished'));

Promise.race([cleanRoom(), removeGarbage(), winIceCream()])
    .then(() => console.log('one of them is finished'));