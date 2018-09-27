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





// Groups 1.0

class Group {
    constructor() {
        this.members = [];
    }

    add (value) {
        if (!this.has(value)) {
            return this.members.push(value);
        }
    }

    delete (value) {
        if (this.has(value)) {
            for (let i = 0; i < this.members.length; i++) {
                if (this.members[i] === value) {
                    this.members = this.members.splice(i, 1);
                }
            }
        }
    }

    has (value) {
        return this.members.includes(value);
    }

    static from (collection) {
        let group = new Group
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));  // → true
console.log(group.has(30));  // → false
group.add(30);
console.log(group);
group.delete(10);
console.log(group);
console.log(group.has(10));  // → false