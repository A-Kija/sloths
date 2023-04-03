//----------------- ANTANAS ---------------------

class Animal {

    static forest = 'B I G';

    constructor(age) {
        this.color = 'yellow';
        if (!age) {
            throw new Error('Animal needs age!');
        } else {
            this.age = age;
        }
    }

    printColor() {
        console.log('%c ' + this.constructor.forest + ' ', 'background-color:' + this.color + ';')
    }

}

//------------------- IEVA -----------------------

const animal1 = new Animal(12);
const animal2 = new Animal(14);

animal2.color = 'crimson';

Animal.forest = 'small';

animal2.printColor();
animal1.printColor();

console.log(animal1, animal2);