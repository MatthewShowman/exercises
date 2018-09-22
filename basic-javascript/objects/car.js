myCar = {
    make: 'Honda',
    model: 'Odyssey',
    year: '2016',
    color: 'silver',
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            console.log('vroom!!!');
        } else {
            console.log('you need to start the car');
        }
    },
    changePaint: function(newColor) {
        this.color = newColor;
    }
};

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar['year']);
console.log(myCar['color']);
// myCar.start();
myCar.drive();




