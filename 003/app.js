const animal = {
    tail: 'short',
    name: 'Bobikas',
    likesSing: false,
    color: {
        hex: '#45d5c5',
        light: true,
        hasSpots: false,
    }
}

const what = 'name';

// console.log(animal[what]);

// for (const prop in animal) {
//     console.log(animal[prop]);
// }

const arr = [
    { id: 5, color: 'pink', long: false },
    { id: 8778, color: 'skyblue', long: true },
    { id: 56, color: 'yellow', long: false },
    { id: 715, color: 'Pink', long: true },
    { id: 522, color: 'crimson', long: false }
];

// console.log(arr[1]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(`%c ${arr[i]} `, `background-color: ${arr[i]};`);
// }

// const FE = arr.forEach((c) => console.log(c));

console.log('');

// const MAP = arr.map(c => ({...c, color: 'black' }));

// const MAP = arr.map(c => c.color === 'pink' ? {...c, color: 'black' } : {...c});

// const MAP = arr.map(c => ({...c, long: !c.long, id: ++c.id, new: 'HEllO' }));

const FIND = arr.find(c => c.long && c.color === 'pink');

const FILTER = arr.filter(c => c.color === 'pink');

const DELETED = arr.filter(c => c.id !== 75);

const FM = arr.filter(c => c.color !== 'pink').map(c => ({...c, color: 'black' }));

const start = 0;
const BIG = arr.reduce((result, c) => c.id > result ? c.id : result, start);

const PINK = arr.reduce((result, c) => c.color === 'pink' ? ++result : result, start);


arr.sort((a, b) => {
    if (a.color > b.color) return 1;
    if (a.color < b.color) return -1;
    return 0;
})

arr.sort((a, b) => b.color.localeCompare(a.color));


// console.log(FE);
// console.log(BIG);
// console.log(PINK);
// FIND.color = 'BLUE';

console.log(arr);