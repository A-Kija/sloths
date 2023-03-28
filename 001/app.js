console.log('%c Hello', 'color:crimson;');

console.log([...Array(10)].map(_ => Math.floor(Math.random() * 11 + 1)));

// var a = 5;

const m = [];
for (let i = 0; i < 10; i++) {
    m.push(Math.floor(Math.random() * 11 + 1));
}
console.log(m);

let A = 55;

const B = 10;

console.log(typeof A, A);
A = '' + A;
console.log(typeof A, A);
A = +A;
console.log(typeof A, A);
A = !!A
console.log(typeof A, A);
A = +A
console.log(typeof A, A);


if ('' == []) {
    console.log('JO');
} else {
    console.log('NEA');
}