let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

        // cleaning the room

        let isClean = false;
        if (isClean) {
            resolve('clean');
        } else {
            reject('not clean');
        }
});

// execute the promise
promiseToCleanTheRoom
    .then(fromResolve => console.log(`the room is ${fromResolve}`))
    .catch(fromReject => console.log(`the room is ${fromReject}`));