// need to create a Class --> easily create new instances of that class

class Stack {
    constructor() {
        this.stack = [];
    }

    push(...items) { // Inside a class, a function is called a "method"; we only need to give the name
        this.stack.push(...items); // can't ONLY use "items" as it will push the WHOLE array
    }

    pop() {
        return this.stack.pop();
    }
}

module.exports = Stack;