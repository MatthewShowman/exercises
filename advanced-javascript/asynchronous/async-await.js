function tripleAfter3Seconds(number) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 3);
        }, 3000);
    });
    return promise;
}

// tripleAfter3Seconds(2).then(
//     result => console.log(result)
// )

async function run() {
    try {
        let result = await tripleAfter3Seconds(2);
        result = await tripleAfter3Seconds(result);
        result = await tripleAfter3Seconds(result);
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}
run();