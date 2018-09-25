// function Vec(x, y) { // Write a class Vec that represents a vector in two-dimensional space.
//     this.x = x;
//     this.y = y;

//     plus (x, y) {
//         x = x + this.x;
//         y = y + this.y;
//     }

//     minus (x, y) {
//         x = x - this.x;
//         y = y - this.y;
//     }
// };



class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus (vector) {
        // let newX = this.x + vector.x;
        // let newY = this.y + vector.y;
        // return new Vec(newX, newY);
        return new Vec(this.x + vector.x, this.y + vector.y);

    }

    minus (vector) {
        // let newX = this.x - vector.x;
        // let newY = this.y - vector.y;
        // return new Vec(newX, newY);
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length () {
        return Math.sqrt((this.x * this.x)+(this.y * this.y));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));   // → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));   // → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);   // → 5





// Groups

class Group {
    constructor() {
        this.members = [];
    }

    add (value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete (value) {
        if (this.member.has(value)) {
            for (let i = 1, i < this.members.length; i++) {

            }
        }
    }

    has (value) {
        return this.member.includes(value);
    }
}