const math = require('./math-module');

let sum = math.add(3, 4);  // 7
console.log(sum);

let difference = math.subtract(3, 4);  // -1
console.log(difference);

let product = math.multiply(3, 4); // 12
console.log(product);

let quotient = math.divide(63, 7);  // 9
console.log(quotient);

let quotientCheck = math.divide(5, 0);  // undefined
console.log(quotientCheck);

let remainder = math.modulo(14, 5);  // 4
console.log(remainder);

let remainderCheck = math.modulo(13, 0);  // undefined
console.log(remainderCheck);

let power = math.power(3, 4);  // 81
console.log(power);

let powerCheckA = math.power(0, 4);  // 0
console.log(powerCheckA);

let powerCheckB = math.power(4, 0);  // 1
console.log(powerCheckB);

let powerCheckC = math.power(0, 0);  // 1
console.log(powerCheckC);

let mean = math.average([5,10,15,20]);  // 12.5
console.log(mean);

let percent = math.percentage(11, 33);
console.log(percent);