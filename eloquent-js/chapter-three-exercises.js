// Minimum

// Your code here.
function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Recursion

// Your code here.
function isEven(x) {
    if (x < 0) {
        x *= -1;
    }

    if (x === 0) {
        return true;
    } else if (x === 1) {
        return false;
    } else {
        return isEven(x-2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-10));
// → ??


// Bean Counting

// Your code here.
function countBs(string) {
    let counter = 0;
    for (i = 0; i <= string.length - 1; i++) {
        if (string[i] === "B") {
            counter++;
        }
    }
    return counter;
}

function countChar(string, char) {
    let counter = 0;
    for (i = 0; i <= string.length - 1; i++) {
        if (string[i] === char) {
            counter++;
        }
    }
    return counter;
}

function countBsAgain(string) {
    countChar(string, B);
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countBs("Bab Bab Bab"));
// → 3