// mixString 1.0
// Given two strings, a and b, create a bigger string made of the first char of a,
// the first char of b, the second char of a, the second char of b, and so on
// Any leftover chars go at the end of the result.

// mixString("abc", "xyz") → "axbycz"
// mixString("Hi", "There") → "HTihere"
// mixString("xxxx", "There") → "xTxhxexre"

function mixString(stringA, stringB) {
    let stringLength = 0;
    let endString = "";
    let newString = "";
    
    if (stringA.length < stringB.length) {
        stringLength = stringA.length;
        endString = stringB.substring(stringA.length);
    } else if (stringA.length > stringB.length) {
        stringLength = stringB.length;
        endString = stringA.substring(stringB.length);
    } else {
        stringLength = stringA.length;
    }
    
    for(let i = 0; i < stringLength; i++) {
        newString += stringA[i] + stringB[i];
    }
    return newString + endString;
}

// console.log(mixString("abc", "xyz"));
// console.log(mixString("Hi", "There"));
// console.log(mixString("xxxxxxx", "There"));




// mixString 2.0
// Given two strings, a and b, create a bigger string made of the first char of a,
// the first char of b, the second char of a, the second char of b, and so on
// Any leftover chars go at the end of the result.

// mixString("abc", "xyz") → "axbycz"
// mixString("Hi", "There") → "HTihere"
// mixString("xxxx", "There") → "xTxhxexre"

function mixString(stringA, stringB) {
    let stringLength = stringA.length;
    let newString = "";
    
    if (stringLength > stringB.length) {
        stringLength = stringB.length;
    }
    
    for(let i = 0; i < stringLength; i++) {
        newString += stringA[i] + stringB[i];
    }

    if (stringA.charAt(stringLength) !== "") {
        return newString += stringA.substring(stringLength);
    } else if (stringB.charAt(stringLength) !== "") {
        return newString += stringB.substring(stringLength);
    } else {
        return newString;
    }
}

// console.log(mixString("abc", "xyz"));
// console.log(mixString("Hi", "There"));
// console.log(mixString("xxxxxxx", "There"));




// mixString 3.0
// Given two strings, a and b, create a bigger string made of the first char of a,
// the first char of b, the second char of a, the second char of b, and so on
// Any leftover chars go at the end of the result.

// mixString("abc", "xyz") → "axbycz"
// mixString("Hi", "There") → "HTihere"
// mixString("xxxx", "There") → "xTxhxexre"

function mixStringB(stringA, stringB) {
    let longestWord;
    let mixedString = "";

    if (stringA.length > stringB.length) {
        longestWord = stringA;
    } else {
        longestWord = stringB;
    }

    for (i = 0; i <= longestWord.length; i++) {
        if (stringA[i] !== undefined) {
            mixedString += stringA[i];
        }

        if (stringB[i] !== undefined) {
            mixedString += stringB[i];
        }
    }

    return mixedString;
}

// console.log(mixStringB("abc", "xyz"));
// console.log(mixStringB("Hi", "There"));
// console.log(mixStringB("xxxx", "There"));




// mixString 4.0
// Given two strings, a and b, create a bigger string made of the first char of a,
// the first char of b, the second char of a, the second char of b, and so on
// Any leftover chars go at the end of the result.

// mixString("abc", "xyz") → "axbycz"
// mixString("Hi", "There") → "HTihere"
// mixString("xxxx", "There") → "xTxhxexre"

function mixStringB(stringA, stringB) {
    let longestWord;
    let mixedString = "";

    if (stringA.length > stringB.length) {
        longestWord = stringA;
    } else {
        longestWord = stringB;
    }

    for (i = 0; i <= longestWord.length; i++) {
        if (stringA[i]) {
            mixedString += stringA[i];
        }

        if (stringB[i]) {
            mixedString += stringB[i];
        }
    }

    return mixedString;
}

// console.log(mixStringB("abc", "xyz"));
// console.log(mixStringB("Hi", "There"));
// console.log(mixStringB("xxxx", "There"));




// mixString 5.0
// Given two strings, a and b, create a bigger string made of the first char of a,
// the first char of b, the second char of a, the second char of b, and so on
// Any leftover chars go at the end of the result.

// mixString("abc", "xyz") → "axbycz"
// mixString("Hi", "There") → "HTihere"
// mixString("xxxx", "There") → "xTxhxexre"

function mixStringB(stringA, stringB) {
    let longestWord;
    let mixedString = "";

    longestWord = stringA.length > stringB.length ? stringA : stringB; //ternary operator

    for (i = 0; i <= longestWord.length; i++) {
        if (stringA[i] !== undefined) {
            mixedString += stringA[i];
        }

        if (stringB[i] !== undefined) {
            mixedString += stringB[i];
        }
    }

    return mixedString;
}

console.log(mixStringB("abc", "xyz"));
console.log(mixStringB("Hi", "There"));
console.log(mixStringB("xxxx", "There"));