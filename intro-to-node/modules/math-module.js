
// Add
function add(num1, num2) {
  return num1 + num2;
}

// Subtract
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiply
function multiply(num1, num2) {
    return num1 * num2;
}

// Divide
function divide(num1, num2) {
    return num1 / num2;
}

// Power
function power(num, index) {
    let base = 1;
    for (let i = 0; i <= index; i++) {
        base = base * num;
    }
    return base;
}

// Squared
function squared(num) {
    return this.power(num,2);
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
    squared,
    average,
    percentage,
}