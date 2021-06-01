// var a = [1, 2, 3, 4, 5]

// var newArr = a.map(function (e) {
//     return e + 1
// })
// // console.log(newArr);


// var even = a.filter(function (e, i) {
//     // if (e % 2 === 0) console.log(i)
// })


// // console.log(even);

// var b = a.forEach(function (e, i, arr) {
//     // console.log(i);
//     // console.log(e);
//     // console.log(arr);
// })

// //destructuring object

// var obj = {
//     name: 'aleksandar',
//     age: 32
// }

// var { name: ime, age: godine } = obj

// // console.log(ime);
// // console.log(godine);

// //destructuring array.

// var arrayOne = ['A', 'B', 'C']

// var [a, b, c] = arrayOne

// // console.log(a, b, c);

// var zebancija = {
//     name: 'pera',
//     age: 26
// }

// //spread operator on objects

// var student = {
//     ...zebancija,
//     sex: 'male',
//     age: 30
// }

// // console.log(student);

// //spread operator on arrays

// var c = [1, 2, 3];

// var d = [-1, 0, ...c, 4, 5]

// // console.log(d);

// //rest operator

// var niz = [1, 2, 3, 4, 5, 6, 7, 8];


// var [prvi, drugi, ...ostatak] = niz; //takes first and the REST of the elements puts into a variable ostatak
// // console.log(prvi, drugi);
// // console.log(ostatak);

// // in objects rest operator takes given keyes as variables and the REST of the keyes:value pairs puts into a new object

// var { name, ...ostatakObj } = student;

// // console.log(ostatakObj);


// //arrow function

// //are always function expression, they don't have declaration

// // console.log([1, 2, 3, 4].map(e => e * 2));

// // console.log([1, 2, 3, 4].filter(e => e % 2 === 0));

// // console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));

// //template literals

// const name1 = 'Pera';
// const age = 25;

// console.log(`${name1} is ${age} years old`);



const list = [1, 2, 3, 3, 3];
const words = ['garnisla', 'cvet', 'macka', 'dva', 'milicija']

function pera(arr, num) {
    return arr.filter(e => e === num).length
}

// console.log(pera(list, 3));

list.forEach((element, index, array) => element);
const two = list.map((element, index) => element * index);
const reci = words.filter((element, index) => element.length > 4 && index > 2)





list.forEach(function (e, i) {
    console.log(e * i);

})


const a1 = [1, 5, 6, 9, 2, 11, 5, 3]

console.log(a1.sort());
