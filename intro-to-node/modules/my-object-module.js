function add(a,b) {
    return a+b;
}

function greet(name) {
    return `Hi, ${name}`;
}

myModule.add(2, 3);

module.exports = {
    add : add,
    greet : greet,
}