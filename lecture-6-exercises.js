// Exercise 1.1

function cipher(string) {
    rot13 = "";
    let asciiCode;
    let message = "";
    
    for (i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            message += " ";
            continue;
        }
        if (string.charCodeAt(i) >= 78) {
            asciiCode = (string.charCodeAt(i) - 13);
        } else {
            asciiCode = (string.charCodeAt(i) + 13);
        }
        rot13 = String.fromCharCode(asciiCode);
        message += rot13;
    }
    return message;
}

// console.log(cipher('SERR CVMMN'));  
// console.log(cipher('LBH QVQ VG')); 




// Exercise 2

function reverseString (string) {
    finalString = "";

    for (i = string.length - 1; i >= 0; i--) {
        finalString += string.charAt(i);
    }
    return finalString;
}

// console.log(reverseString('Hello, World!'));  
// console.log(reverseString('This is a test'));  
// console.log(reverseString('Javascript is great!'));  
// console.log(reverseString('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));  
// console.log(reverseString('A')); 




// Exercise 2.2

function reverseStringB (string) {
    let stringToArray = string.split("");
    let reversedArray = stringToArray.reverse();
    return reversedArray.join("");
}

// console.log(reverseStringB('Hello, World!'));  
// console.log(reverseStringB('This is a test'));  
// console.log(reverseStringB('Javascript is great!'));  
// console.log(reverseStringB('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));  
// console.log(reverseStringB('A')); 




// Exercise 2.3

function reverseStringC (string) {
    return string.split("").reverse().join("");
}

// console.log(reverseStringC('Hello, World!'));  
// console.log(reverseStringC('This is a test'));  
// console.log(reverseStringC('Javascript is great!'));  
// console.log(reverseStringC('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));  
// console.log(reverseStringC('A')); 




// Exercise 3

function calculateTip(price, rating) {
    
    rating = rating.toLowerCase();
    let taxRate;

    switch (rating) {
        case 'terrible':
            taxRate = 0;
            break;

        case 'poor':
            taxRate = 0.05;
            break;

        case 'good':
            taxRate = 0.10;
            break;

        case 'great':
            taxRate = 0.15;
            break;

        case 'excellent':
            taxRate = 0.20;
            break;

        default:
            return "Rating not recognized"
    }

    let tax = price * taxRate;
    return Math.ceil(tax);
}

// console.log(calculateTip(20, 'Terrible'));
// console.log(calculateTip(26.95, 'good'));  
// console.log(calculateTip(26.95, 'kind of okay but not great'));  
// console.log(calculateTip(20, 'Excellent'));  
// console.log(calculateTip(26.95, 'good'));  
