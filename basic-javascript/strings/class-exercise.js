// Exercise 1

function endsWithOther(str1, str2) {
    let strLowA = str1.toLowerCase();
    let strLowB = str2.toLowerCase();

    if (strLowA.length > strLowB.length) {
        if (strLowA.endsWith(strLowB)) {
            return true;
        } else {
            return false;
        }
    } else {
        if (strLowB.endsWith(strLowA)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(endsWithOther('Yyy','HelloYyy'));
console.log(endsWithOther('HelloYyy','Yyy'));
console.log(endsWithOther('Zzzy','Helloxxy'));
console.log(endsWithOther('The Greatest Showman','Matthew Showman'));
console.log(endsWithOther('The Greatest Showman','Showman'));



console.log(""); //Exercise 1.2

function endsWithOtherAgain(strA, strB) {
    let strLowA = strA.toLowerCase();
    let strLowB = strB.toLowerCase();
    let short;
    let long;

    if (strLowA.length > strLowB.length) {
        short = strLowB;
        long = strLowA;
    } else {
        short = strLowA;
        long = strLowB;
    }

    if (long.endsWith(short)) {
        return true;
    } else {
        return false;
    }
}

console.log(endsWithOtherAgain('Yyy','HelloYyy'));
console.log(endsWithOtherAgain('HelloYyy','Yyy'));
console.log(endsWithOtherAgain('Zzzy','Helloxxy'));
console.log(endsWithOtherAgain('The Greatest Showman','Matthew Showman'));
console.log(endsWithOtherAgain('The Greatest Showman','Showman'));



console.log(""); //Exercise 1.3

function endsWithOtherYetAgain(strA, strB) {
    let longStr;
    let shortStr;

    if (strA.length > strB.length) {
        longStr = strA;
        shortStr = strB;
    } else {
        longStr = strB;
        shortStr = strA;
    }

    let endOfLongString = longStr.slice(shortStr.length * -1);

    return endOfLongString.toUpperCase() === shortStr.toUpperCase();
}

console.log(endsWithOtherYetAgain('Yyy','HelloYyy'));
console.log(endsWithOtherYetAgain('HelloYyy','Yyy'));
console.log(endsWithOtherYetAgain('Zzzy','Helloxxy'));
console.log(endsWithOtherYetAgain('The Greatest Showman','Matthew Showman'));
console.log(endsWithOtherYetAgain('The Greatest Showman','Showman'));



console.log(""); //Exercise 1.4

function endsWithOtherYet(strA, strB) {
    strA = strA.toUpperCase();
    strB = strB.toUpperCase();
    
    return strA.endsWith(strB) || strB.endsWith(strA);
}

console.log(endsWithOtherYet('Yyy','HelloYyy'));
console.log(endsWithOtherYet('HelloYyy','Yyy'));
console.log(endsWithOtherYet('Zzzy','Helloxxy'));
console.log(endsWithOtherYet('The Greatest Showman','Matthew Showman'));
console.log(endsWithOtherYet('The Greatest Showman','Showman'));



console.log(""); // Add name to hello

function helloName(name) {
    //return "Hello " + name + "!";
    return `Hello ${name}!`;
}

console.log(helloName("Bob"));
console.log(helloName("Alice"));
console.log(helloName("X"));



console.log(""); // Left 2: moves the first two charsacters to the end of the string

function left2 (string) {
    let firstTwo = string.substring(0,2);
    let theRest = string.slice(2);
    return theRest + firstTwo;
}

console.log(left2('Hello'));
console.log(left2('java'));
console.log(left2('Hi'));



console.log(""); // Repeat the end

function repeatEnd (string, int) {
    let endOfString = "";

    for (i = 0; i < int; i++) {
        endOfString += string.slice(int * -1);
    }
    return endOfString;
}

console.log(repeatEnd('fraggle', 4));
console.log(repeatEnd('fraggle', 3));
console.log(repeatEnd('fraggle', 2));
console.log(repeatEnd('fraggle', 1));



console.log(""); // Repeat the end.2

function repeatEndAgain (string, int) {
    let endOfString = "";
    let lastChars = string.slice(int * -1);

    for (i = 0; i < int; i++) {
        endOfString += lastChars;
    }
    return endOfString;
}

console.log(repeatEnd('fraggle', 4));
console.log(repeatEnd('fraggle', 3));
console.log(repeatEnd('fraggle', 2));
console.log(repeatEnd('fraggle', 1));



console.log(""); // X and Y balance

function xyBalance(chars) {
    let xCount = 0;
    let yCount = 0;

    for (i = 0; i < chars.length; i++) {
        if (chars.charAt(i).toLowerCase() === 'x') {
            xCount++;
        } else if (chars.charAt(i).toLowerCase() === 'y') {
            yCount++;
        }
    }
    return xCount === yCount;
}

console.log(xyBalance('aaxbb'));
console.log(xyBalance('aaxbbccxddy'));
console.log(xyBalance('aaxbbyccxddyeeX'));
console.log(xyBalance('XxXxYyYy'));