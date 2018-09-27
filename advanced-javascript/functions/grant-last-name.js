// grantLastName(['James', 'Sue'], 'Smith')
// given an array of first names
// return an array with combined first and last names

// let firstNames = ['James', 'Sue'];
// let fullNameArray = firstNames.map(grantLastName(lastName) {
//     return 
// }


function grantLastName(firstNames, lastName) {
    let fullNames = firstNames.map(function(firstName) {
        return firstName + " " + lastName;
    });
    return fullNames;
}

console.log(grantLastName(['James', 'Sue'], 'Smith'));




// or with forEach

function grantLastNameB(firstNames, lastName) {
    let fullNames = [];
    firstNames.forEach(function(firstName) {
        fullNames.push(firstName + " " + lastName);
    });
    return fullNames;
}

console.log(grantLastNameB(['James', 'Sue'], 'Smith'));