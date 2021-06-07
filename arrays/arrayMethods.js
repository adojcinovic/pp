var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

let sum = voters.reduce(function (acc, e, i, arr) {
    return acc + e.age / arr.length
}, 0)

let glasanje = voters.filter(function (e) {
    if (e.voted) return e
})

// console.log(glasanje.length);


// console.log(sum);

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(array1.reduce(function (acc, e) {
    if (e > 5) acc.push(e)
    return acc
}, [])
);

var array = [{ a: 2, b: true }, { a: 4, b: false }, { a: 3, b: true }, { a: 0, b: false }]

console.log(array.filter(e => e.a && e.b));