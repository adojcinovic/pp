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

