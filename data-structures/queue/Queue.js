class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(...items) {
        this.queue.unshift(...items);
    }

    dequeue() {
        return this.queue.length === 0 ? null : this.queue.shift();
        // if(this.queue.length === 0) {
        //     return null;
        // }
        // return this.queue.shift();
    }
}

module.exports = Queue;