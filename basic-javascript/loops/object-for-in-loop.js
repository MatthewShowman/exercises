let myStrings = {
    height: '5-8',
    weight: '135',
    age: '39',
    nationality: 'U.S.',
    status: 'married'
};

for (let key in myStrings) {
    console.log(key + ": " + myStrings[key]);
}