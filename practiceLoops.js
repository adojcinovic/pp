var punishment = '';
for (var i = 0; i < 100; i++) {
    punishment += 'I will never do this again\n';
}

// console.log(punishment);

var res = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        res += '*\t';
    }
    res += '\n';
}
// console.log(res);

//Loops exercises


/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

for (i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        // console.log(i, 'even');
    } else {
        // console.log(i, 'odd');
    }
}

/* 2. Write a program to sum the multiples of 3 and 5 under 1000.*/

for (i = 1; i <= 1000; i++) {
    // if (i % 3 === 0 || i % 5 === 0) console.log(i);
}

// 3. Write a program to compute the sum and product of an array of integers.

var arr1 = [2, 4, 6]
var sum = 0
var product = 1;

for (var i = 0; i < arr1.length; i++) {
    sum = sum += arr1[i]
    product = product * arr1[i]
}
// console.log(sum, product);


// 4. Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var string1 = ''

for (var i = 0; i < x.length; i++) {
    string1 += x[i] + ' '
}
// console.log(string1);

// 5.  Write a program that prints the elements of the following array.

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

for (var i = 0; i < a.length; i++) {
    // console.log(a[i]);

    for (var j = 0; j < a[i].length; j++) {
        // console.log(a[i][j]);

    }
}

// 6. Write a program that outputs the sum of squares of the first 20 numbers
var sumOfSquares = 0;

for (var i = 1; i <= 20; i++) {
    sumOfSquares += i ** 2

}
console.log(sumOfSquares);


// 7. Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
