// function exercises

//exercise 1
/*Write a program that calculates the maximum of two given numbers. 
A = 5 b = 6 output: 6
*/

function maximum(a, b) {
    var max;
    if (a > b) {
        max = a
    } else {
        max = b
    }
    console.log(max);

}

// maximum(11, 22)


//exercise 2
/*Write a program that checks if a given number is odd.
A = 3 output: odd*/

function odd(a) {
    var odd = 'odd';
    if (a % 2 === 1) {
        console.log(odd);

    }
}
// odd(10)

//exercise3
/*Write a program that checks if a given number is a three digit long number*/

function threeDigit(num) {
    if (num >= 100) {
        console.log('given number is 3 digits long');

    }
}
// threeDigit(10)

//exercise4
/*Write a program that calculates an arithmetic mean of four numbers.*/

function average(num1, num2, num3, num4) {
    var avg = (num1 + num2 + num3 + num4) / 4
    console.log(avg);

}
// average(3, 4, 5, 6)

//exercise5
/*Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:
*****
*    *
*    *
*    *
*****
*/

function drawSquare(size) {
    var star = ''
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= size; j++) {
            if (i === 1 || i === size || j === 1 || j === size) {
                star += '*';
            } else (star += ' ');
        } star += ' '
        star += '\n'
    } console.log(star);
}

drawSquare(5)
