// Exercise 1.1
/*
function cipher(string) {
    rot13 = "";
    let asciiCode;
    let message = "";
    
    for (i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 78) {
            asciiCode = (string.charCodeAt(i) - 13);
        } else {
            asciiCode = (string.charCodeAt(i) + 13);
        }
        rot13 += asciiCode + ", ";
    }
    return string.fromCharCode(rot13);
}

console.log(cipher('SERR CVMMN'));  
console.log(cipher('LBH QVQ VG')); 
*/

// Exercise 2

function reverseString (string) {
    finalString = "";
    let startPos = string.length - 1;

    for (i = 0; i < string.length; i++) {
        finalString += string.slice(startPos - 1, startPos);
    }
    return finalString;
}

console.log(reverseString('Hello, World!'));  
console.log(reverseString('This is a test'));  
console.log(reverseString('Javascript is great!'));  
console.log(reverseString('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));  
console.log(reverseString('A')); 