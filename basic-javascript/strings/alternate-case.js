// Alternate Cases
// Write a function such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

// console.log(alternateCase('hello world'));      // HELLO WORLD
// console.log(alternateCase('HELLO WORLD'));      // hello world
// console.log(alternateCase('hello WORLD'));      // HELLO world
// console.log(alternateCase('HeLLo WoRLD'));      // hEllO wOrld
// console.log(alternateCase('12345'));            // 12345
// console.log(alternateCase('1a2b3c4d5e'));       // 1A2B3C4D5E
// console.log(alternateCase('String.prototype.charCodeAt'));  // sTRING.PROTOTYPE.CHARcODEaT  
// console.log(alternateCase(alternateCase('Hello World')));  // Hello World

function alternateCase (words) {
    let newString = "";

    for (let i = 0; i <= words.length; i++) {

        if (words.charCodeAt(i) >= 65 && words.charCodeAt(i) <= 90) { // If char is uppercase, make it lowercase.
            ascii = words.charCodeAt(i) + 32;
            newString += String.fromCharCode(ascii);
        } else if (words.charCodeAt(i) >= 97 && words.charCodeAt(i) <= 122) {// If char is lowercase, make it uppercase.
            ascii = words.charCodeAt(i) - 32;
            newString += String.fromCharCode(ascii);
        } else {  // If char is not a letter, print it as is.
            newString += words.charAt(i);
        }
    }
    return newString;
}




// Alternate Cases 2.0
// Write a function such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

console.log(alternateCaseB('hello world'));      // HELLO WORLD
console.log(alternateCaseB('HELLO WORLD'));      // hello world
console.log(alternateCaseB('hello WORLD'));      // HELLO world
console.log(alternateCaseB('HeLLo WoRLD'));      // hEllO wOrld
console.log(alternateCaseB('12345'));            // 12345
console.log(alternateCaseB('1a2b3c4d5e'));       // 1A2B3C4D5E
console.log(alternateCaseB('String.prototype.charCodeAt'));  // sTRING.PROTOTYPE.CHARcODEaT  
console.log(alternateCaseB(alternateCase('Hello World')));  // Hello World

function alternateCaseB (words) {
    let newString = "";

    for (let i = 0; i < words.length; i++) {
        console.log(words.charCodeAt(i));
        let ascii = words.charCodeAt(i);

        if (ascii >= 65 && ascii <= 90) { // If char is uppercase, make it lowercase.
            newString += String.fromCharCode(ascii + 32);
        } else if (ascii >= 97 && ascii <= 122) {// If char is lowercase, make it uppercase.
            newString += String.fromCharCode(ascii - 32);
        } else {  // If char is not a letter, print it as is.
            newString += words[i];
        }
    }
    return newString;
}




// Alternate Cases 3.0
// Write a function such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

// console.log(alternateCaseC('hello world'));      // HELLO WORLD
// console.log(alternateCaseC('HELLO WORLD'));      // hello world
// console.log(alternateCaseC('hello WORLD'));      // HELLO world
// console.log(alternateCaseC('HeLLo WoRLD'));      // hEllO wOrld
// console.log(alternateCaseC('12345'));            // 12345
// console.log(alternateCaseC('1a2b3c4d5e'));       // 1A2B3C4D5E
// console.log(alternateCaseC('String.prototype.charCodeAt'));  // sTRING.PROTOTYPE.CHARcODEaT  
// console.log(alternateCaseC(alternateCase('Hello World')));  // Hello World

function alternateCaseC (words) {
    let newString = "";

    for (let i = 0; i < words.length; i++) {
        
        let ascii = words.charCodeAt(i);

        if (ascii >= 65 && ascii <= 90) { // If char is uppercase, make it lowercase.
            newString += words[i].toLowerCase();
        } else if (ascii >= 97 && ascii <= 122) {// If char is lowercase, make it uppercase.
            newString += words[i].toUpperCase();
        } else {  // If char is not a letter, print it as is.
            newString += words[i];
        }
    }
    return newString;
}