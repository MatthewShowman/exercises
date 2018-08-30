//Calculate whether a year might be a leap year

let myYear = 1776;
let myBool;

if (myYear % 100 == 0 && myYear % 400 != 0 ) {
    myBool = false;
} else if (myYear % 4 == 0) {
    myBool = true;
} else {
    myBool = false;
}

console.log(myYear + " " + myBool);