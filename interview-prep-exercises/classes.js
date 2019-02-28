class Kiosk {
    constructor(name, product, employees, location) {
        this.name = name;
        this.product = product;
        this.employees = employees;
        this.location = location;
    }

    get capsName() {
        let nameArray = name.split(' ');
        for(let elem in nameArray) {
            elem.toUpperCase();
        }
        return nameArray.join(' ');
    } 
}

let beatBox = new Kiosk('Beat Box','percussion equipment',7,'B6');

console.log(beatBox);