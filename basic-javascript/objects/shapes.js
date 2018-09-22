// Create a Shape class.
/*
Should have getArea method
Be able to create other shapes:
    circle - constructor(diameter)
    rectangle - constructor(width, height)
    square - constructor(width)
*/

class Shape {
    constructor() {

    }

    getArea () {

    }

    getPerimeter() {

    }
};

class Circle extends Shape {
    constructor(diameter) {
        super();
        this.diameter = diameter;
    }
    getArea() {
        let radius = this.diameter / 2;
        return Math.PI * Math.pow(radius, 2); 
    }

    getPerimeter() {
        return Math.PI * this.diameter;
    }
};

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return  (this.width + this.height) * 2;
    }
};

class Square extends Rectangle {
    constructor(width) {
        super(width, width)
    }
};
console.log('');
let circle = new Circle(10);
console.log('The circle area = ' + circle.getArea());
console.log('The circle perimeter = ' + circle.getPerimeter());
console.log('');
let rectangle = new Rectangle(5, 10);
console.log('The rectangle area = ' + rectangle.getArea());
console.log('The rectangle perimeter = ' + rectangle.getPerimeter());
console.log('');
let square = new Square(5);
console.log('The square area = ' + square.getArea());
console.log('The square perimeter = ' + square.getPerimeter());
console.log('');