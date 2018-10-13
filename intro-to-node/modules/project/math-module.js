
// Add
function add(a, b) {
  return a + b;
}

// Subtract
function subtract(a, b) {
    return a - b;
}

// Multiply
function multiply(a, b) {
    return a * b;
}

// Divide
function divide(a, b) {
    if (b === 0) {
        return undefined;
    } else {
        return a / b;
    }
}

// Modulo
function modulo(a, b) {
    if (b === 0) {
        return undefined;
    } else {
        return a % b;
    }
}

// Power
function power(base, exponent = 0) {
    let pow = 1;
    for (let i = 0; i < exponent; i++) {
        pow = pow * base;
    }
    return pow;
}

// Average
function average(arr) {
    let sum = arr.reduce(function(total,current) {
        return total + current
    }, 0)
        return sum / arr.length;
}

// Percentage
function percentage(subset,total) {
    let percent = subset / total * 100;
    return `${percent}%`;
}

// 

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    modulo,
    average,
    percentage,
}