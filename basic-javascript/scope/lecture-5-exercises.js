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
    
    for(i = 0; i < sentenceToArray.length; i++) { //See code below for the for loop
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

/*
let word = words[i];

if (word.length > longestLength) {
    longestLength = word.length;
    longestWord = word;
}
*/



// Exercise 3

function validatePhoneNumber(numString) {
    
    newNumString = '';
    
    //Check the string for non-numeral characters
    for(i = 0; i < numString.length; i++) {
        if (numString.charCodeAt(i) >= 48 && numString.charCodeAt(i) <= 57) { //Checking the ASCII code values for each character in the string
            newNumString += numString.charAt(i); //Creating a new string IF the ASCII indicates that it's a number between 0 and 9
        }
    }
    
    //Test the string for the proper number of digits
    if (newNumString.length == 10) {
        return newNumString;
    } else if (newNumString.length == 11 && newNumString.charAt(0) === '1') { //Check for an extra 1 at the beginning of an 11 digit number
        return newNumString.substring(1);
    } else {
        return '0000000000';
    }
}

console.log(validatePhoneNumber('(123) 456-7890'));  
console.log(validatePhoneNumber('123.456.7890'));  
console.log(validatePhoneNumber('11234567890'));  
console.log(validatePhoneNumber('21234567890'));  
console.log(validatePhoneNumber('123456789'));
console.log(validatePhoneNumber('1212345678901234'));
console.log(validatePhoneNumber('123'));  



// Exercise 4