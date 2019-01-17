class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this._length = 0; //just means not to use length for other things
        this._head = null; //when a list is being created, the head is null
    }

    add(value) {
        let node = new Node(value, this._head);
        this._head = node;
        this._length++
    }

    removeHead() {
        if (!this._head) {
            return null;
        }
        let value = this._head.value;
        this._head = this._head.next;
        this._length--;
        return value;
    }

    search(value) {
        // if (!this._head) {
        //     return null;
        // }
        
        // // let length = this._length;
        // let current = this._head;

        // // for(let i = 0; i < length; i++) {
        //     if(current.value.name === value) {
        //         return i;
        //     } else if (current.next === null) {
        //         return null;
        //     }
        //     else {
        //         current = current.next;
        //     }
        // }

        let index = 0;
        let currentNode = this._head;

        while(currentNode) {
            if(currentNode.value.name === value)
                return index;
            currentNode = currentNode.next;
            index++;
        }

        return null;
    }

    get length() { //When outside of the file, length won't be touched
        return this._length;
    }
}



module.exports = LinkedList;