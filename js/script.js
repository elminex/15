
//ZADANIE WG TEGO CO W MODULE

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price);
}

let iPhone6s = new Phone('Apple', 1500, 'silver');
let SamsungS6 = new Phone('Samsung', 1600, 'black');
let OnePlus = new Phone('Google', 1700, 'gold');

iPhone6s.printInfo();
SamsungS6.printInfo();
OnePlus.printInfo();


// ZADANIE PO TYM JAK SIĘ TROCHE POBAWIŁEM
/*

let phoneArray = [];

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    phoneArray.push(this);
}
new Phone('Apple', 1500, 'silver');
new Phone('Samsung', 1600, 'black');
new Phone('OnePlus', 1700, 'gold');

Phone.prototype.addSystem = function () {
    if (this.brand != 'Apple') {
        this.system = 'Android';
    } else {
        this.system = 'iOS';
    }
}

Phone.prototype.printInfo = function () {
    let output = document.querySelector('.output');
    output.insertAdjacentHTML('beforeend', `The phone brand is ${this.brand}, color is ${this.color} and the price is ${this.price}.<br><br> ${this.system}<br><br>`);
}

phoneArray.forEach(elem => {
    elem.addSystem();
    elem.printInfo();
})
console.table(phoneArray);
*/