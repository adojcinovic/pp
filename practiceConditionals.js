// var a = 4;

// var b = a > 0
//     ? 'b is positive'
//     : 'b is negative';

// // var a = 2;

// var result = ''
// if (a === 1) {
//     result = 'one'
// } else if (a === 2) {
//     result = 'two'
// } else if (a === 3) {
//     result = 'three'
// } else {
//     result = 'Result is not a number between 1 and 3'
// }

// console.log(result);


// var a = 4;
// var b = 0;
// var c = -1;


// if (a > b && a > c) {
//     if (b > c) {
//         console.log(a, b, c);
//     } else {
//         console.log(a, c, b);
//     }
// } else if (b > a && b > c) {
//     if (a > c) {
//         console.log(b, a, c);
//     } else {
//         console.log(b, c, a);
//     }
// } else if (c > a && c > b) {
//     if (a > b) {
//         console.log(c, a, b);
//     } else {
//         console.log(c, b, a);
//     }
// }

//29-04

//Exercise 6

var unit = 'f';

var temperature = 140;

if (unit === 'f') {
    temperature = (temperature - 32) * 5 / 9;
} else {
    temperature = (9 * temperature / 5) + 32;
}

// console.log(temperature);


//Exercise 7

a = 20;
result;
if (a > 13) {
    result = (a - 13) * 2;
} else if (a < 13) {
    result = 13 - a;
}
console.log(result);

//Exercise 8

var b = 12;
var c = 5;
var sum;

if (b === c) {
    sum = (b + c) * 3;
} else {
    sum = b + c;
}
// console.log(sum);

//Exercise 9

var num1 = 5;
var num2 = 54;

if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    console.log('true');
}

//Exercise 10

var num3 = 256;
var result;

if (num3 < 20) {
    result = '-'
} else if (num3 > 20 && num3 < 100) {
    result = '20 <=> 100'
} else if (num3 > 100 && num3 < 400) {
    result = '100 <=> 400'
}
console.log(result);


var a = 14;
var b = 1;

if (a > b) {
    console.log('A is greater than B');
} else if (b > a) {
    console.log('B is greater than A');
} else {
    console.log('They are equal');
}


var c = 10;

if (c % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}

var d = 150;

if (d % 3 === 0 && d % 5 === 0) {
    console.log(d);
} else {
    console.log('Number is not divisible with 3 nor with 5!');
}

var e = 3;
var f = -7;
var g = 2;
var sum = e * f * g;


if (sum > 0) {
    console.log(sum, 'is a positive number');
} else {
    console.log(sum, 'is a negative number');
}

var something = 11;

if (typeof (something) === 'number' && something % 2 === 0) {
    console.log(something);
} else {
    console.log('X');
}
