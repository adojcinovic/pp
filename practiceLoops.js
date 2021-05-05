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
// console.log(sumOfSquares);


// 7. Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 




/* 8.  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5
 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

for (var i = 1; i <= 100; i++) {
    // if (i % 3 === 0 && i % 5 === 0) console.log(i, 'fizzbuzz')
    // else if (i % 3 === 0) console.log(i, 'fizz');
    // else if (i % 5 === 0) console.log(i, 'buzz');
    // else console.log(i);
}


// Exercise 2 

/* 1. Write a program that checks if a given element e is in the array a.
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes*/

var e = 3;
var a = [5, -4.2, 3, 7];
var m = []
for (var i = 0; i < a.length; i++) {
    // if (a[i] === e) console.log('yes');
}

for (var i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        m[i] = a[i]
    } else if (a[i] === e) {
        i++
    }

}

// console.log(m);


/*Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var arrX = [4, 2, 2, -1, 6]
var min = Infinity;
var index;
for (var i = 0; i < arrX.length; i++) {
    if (arrX[i] < min) {
        min = arrX[i]
        index = i
    }
}
console.log(min, index);

/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var arrZ = [-3, 11, 5, 3.4, -8]
var arrZ1 = []
for (var i = 0; i < arrZ.length; i++) {
    if (arrZ[i] > 0) {
        arrZ1[i] = arrZ[i] * 2
    } else arrZ1[i] = arrZ[i]

}
console.log(arrZ1);


/*Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var newArr = [4, 2, 2, -1, 6];
var minNum = Infinity;
var minNum2 = Infinity;
for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] < minNum) {
        minNum = newArr[i]
    }
}
for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] < minNum2 && newArr[i] > minNum) {
        minNum2 = newArr[i]
    }
}

console.log(minNum2);

