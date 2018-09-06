//Practicing conditionals

let mts = 39;
let brs = 36;

if (mts > brs) {
    console.log(mts);
} else {
    console.log(brs);
}


console.log("\n"); //review activity 1

let cigars = 61;
let isWeekend = false;
let isSuccess;

if (isWeekend === true && cigars >= 40) {
    isSuccess = true;
} else if (cigars >= 40 && cigars <= 60) {
    isSuccess = true;
} else {
    isSuccess = false;
}
console.log(isSuccess);


console.log("\n"); //review activity 2


let speed = 85; //change as needed
let ticket; //encoded as 0, 1, or 2
let birthday = true; //change as needed
let fineSize = ""; //a string to state the size of the ticket

if (birthday) {
  speed -= 5;
}

if (speed > 80) {
    ticket = 2;
} else if (speed > 60 && speed <= 80) {
    ticket = 1;
} else {
    ticket = 0;
}


switch(ticket) {
    case 0:
        fineSize = "no ticket";
        break;

    case 1:
        fineSize = "small ticket";
        break;

    case 2:
        fineSize = "big ticket";
        break;
}

console.log(fineSize);
console.log("\n"); 