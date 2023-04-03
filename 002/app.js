// console.log('Labukas!');


function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


// function fun() {
//     console.log('%cFUN', 'color:' + randomColor() + ';');
// }

// function fun() {
//     console.log('bla bla');
// }

const kemDu = 42;

const fun = function(param) {
    console.log('%c' + param, 'color:' + randomColor() + ';');
}

const moreFun = (param) => {
    console.log('%c' + param, 'color:' + randomColor() + ';');
}

const moreAndMoreFun = param => console.log('%c' + param, 'color:' + randomColor() + ';');


const callFun = (callBack) => {
    const symbols = '*';
    console.log('%c' + callBack(symbols), 'color:' + randomColor() + ';');
}

const doText = (what) => {
    return [...Array(100)].join(what);
}

// callFun(doText, '-');


// fun('Labas');
// moreFun('Kaip tu?');
// moreAndMoreFun('Zuiki');


// callFun(what => [...Array(100)].join(what));


const animals = [
    'Racoon',
    'Rabit',
    'Fox'
];


const inerate = (cb, arr) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

Array.prototype.doFun = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

// animals.doFun(a => console.log(a));
// animals.forEach(a => console.log(a));

// inerate(fun, animals);

//keywords: rest, spread, ref or value, destruction


let A = 5;
let B = A; // A value 5

A++;

// console.log(A, B);

let C = [5];
let D = C; // C reference

C[0]++;


// console.log(C, D);


let E = [5];
let F = [...E]; // make copy

E[0]++;


// console.log(E, F);


const structure = [4, 6, 88, 7];


// console.log([...structure]);
// console.log({...structure });
// console.log('B', ...structure, 'A');


const obj = {
    color: 'skyblue',
    name: 'Rex',
    big: true
}

// obj.color = 'crimson';
// console.log(obj);

// console.log({...obj, tractor: 42, color: 'crimson' });


const sum = (...args) => {
    // console.log(args);
}

// sum(4, 8);
// sum(5, 10, 10, 10, 14);


const { color, name, joe } = obj; // o destruct

// console.log(color, name, joe);

const [a1, a2] = animals;

// console.log(a1, a2);

abc = 0;

const ter = abc < 50 ? 'iki 50' : (abc < 70 ? 'iki 70' : 'virs 70');

// console.log(ter);


const b = () => {
    console.log('big');
    return 0;
}
const s = () => {
    console.log('small');
    return 0;
}

const z = () => {
    console.log('zuper');
    return 0;
}


// abc ? b() : s();

b() || s() || z();


let rez = 0;


let print = rez || 'no result';

console.log(print);