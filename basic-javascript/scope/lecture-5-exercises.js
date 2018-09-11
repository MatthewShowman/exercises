// Exercise 1

let manyWords = ['I', 'have', 'a', 'question', 'about', 'a', 'horse'];

function returnSentence(array) {
    let buildSentence = '';
    for(i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            buildSentence += array[i] + " ";
        } else {
            buildSentence += array[i];
        }
    }
    buildSentence += '.';
    return buildSentence;
}

console.log(returnSentence(manyWords));

/*
buildSentence += array[i];

if (array.length - 1 !== i) {
    uildSentence += " ";
}
*/


// Exercise 2

let sentence = 'This one is kinda stressing me out.';

function longestWord(string) {
    let base = 0;
    let sentenceToArray = string.split(' ');
    let finalWord = '';
    
    for(i = 0; i < sentenceToArray.length; i++) {
        let length = sentenceToArray[i].length;
        if (length > base) {
            base = length;
            finalWord = sentenceToArray[i];
        }
    }
    //return sentenceToArray;
    return finalWord;
}

console.log(longestWord(sentence));



// Exercise 3

function validatePhoneNumber(numString) {
    newNumString = '';
    for(i = 0; i < numString.length; i++) {
        if (numString.charCodeAt(i) >= 48 && numString.charCodeAt(i) <= 57) {
            newNumString += numString.charAt(i);
        }
    }
    
    if (newNumString.length == 10) {
        return newNumString;
    } else if (newNumString.length >= 11) {
        if (newNumString.charAt(0) === '1') {
            return newNumString.substring(1);
        } else {
            return '0000000000';
        }
    } else {
        return '0000000000';
    }
}

console.log(validatePhoneNumber('(123) 456-7890'));  
console.log(validatePhoneNumber('123.456.7890'));  
console.log(validatePhoneNumber('11234567890'));  
console.log(validatePhoneNumber('21234567890'));  
console.log(validatePhoneNumber('123456789'));
console.log(validatePhoneNumber('212345678901234'));
console.log(validatePhoneNumber('123'));  



// Exercise 4