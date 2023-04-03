//----------------- DVIRATININKAS ---------------------
class Color {

    constructor() {
        this.color = '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
    }


}


//----------------- BEBRAS ---------------------
class NicePrint extends Color {

    constructor() {
        super();
    }

    printColor() {
        console.log('%c ' + this.constructor.forest + ' ', 'background-color:' + this.color + ';')
    }

}



//----------------- ANTANAS ---------------------

class Animal extends NicePrint {

    static forest = 'B I G';

    constructor(age) {
        super();
        if (!age) {
            throw new Error('Animal needs age!');
        } else {
            this.age = age;
        }
    }

    printColor2() {
        console.log('Hello');
    }

}

//------------------- IEVA -----------------------

const animal1 = new Animal(12);
const animal2 = new Animal(14);

// animal2.color = 'crimson';

Animal.forest = 'small';

animal2.printColor();
animal2.printColor2();

console.log(animal1, animal2);