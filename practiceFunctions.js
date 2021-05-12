// function exercises
//Page 1
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
    return (num >= 100 && num < 1000)
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

function square1(size) {
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

// square1(5)

function starsInLine(num) {
    var line = ''
    var a = '*'
    for (var i = 0; i < num; i++) {
        line += a
    }
    return line
}

function sq(rows) {
    var str = '';
    for (var i = 0; i < rows - 1; i++) {
        str = str += starsInLine(rows) + '\n'
    }
    return str
}

var printSquare = sq;
// var printSquare2 = sq()
// console.log(printSquare(5));
// console.log(printSquare2);

//Exercise 6

/* Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * */


function drawLines(x, y, z) {
    var a = starsInLine(x) + '\n' + starsInLine(y) + '\n' + starsInLine(z) + '\n'
    return a
}

// console.log(drawLines(3, 5, 11));

//Exercise 7

//Write a program that calculates a number of digits of a given number. 

function calcDigitsNum(number) {
    return ('' + number).length

}
// console.log(calcDigitsNum(9999));

//Exercise 8

/*Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */


var a = [2, 4, 7, 8, 8, 7, 7, 1];
var e = 8;


function calcApp(arr, num) {
    var numOfApp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            numOfApp++
        }
    } return numOfApp
}

// console.log(calcApp(a, e));

// Exercise 9
/* Write a program that calculates the sum of odd elements of a given array. */

function sumOfOdd(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            sum += array[i]
        }
    } return sum
}

// console.log(sumOfOdd(a));

// Exercise 10

/* Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

function numOfAppLetter(string) {
    var c = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            c++
        }
    } return c
}

// console.log(numOfAppLetter('AAAaaa'))

//Exercise 11
/*Write a program that concatenates a given string given number of times. For example, 
if “abc” and 4 are given values, the program prints out abcabcabcabc. */

function concat(str1, num_of_times) {
    var str2 = ''
    for (var i = 0; i < num_of_times; i++) {
        str2 += str1
    } return str2
}

// console.log(concat('zoran ', 4));

//Page 2
//Exercise 1
/*Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/

var input = 4;

function checkInput(inp) {
    if (typeof inp === 'string') {
        return inp
    } else {
        return 'Not a string'
    }
}

// console.log(checkInput(input));


//Exercise 2
/*Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/

function blankString(string) {
    if (typeof string === 'string' && string.length > 0) {
        return true
    } else {
        return false
    }
}

// console.log(blankString(' '));


//Exercise 3
/*Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
    "Ha", 3 -> "HaHaHa"
*/

function concatString(string, times) {
    var once = string
    for (var i = 0; i < times; i++) {
        once += string
    } return once
}

// console.log(concatString('ha', 5));

//Exercise 4

/*Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

function numOfLetter(string, letter) {
    counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter++
        }
    } return counter
}

// console.log(numOfLetter('My random aaastring', 'a'));


//Exercise 5
/*Write a function to find the position of the first occurrence of a character in a string.
The result should be the position of character. If there are no occurrences of the character, the function should return -1.*/

function firstOcc(string, char) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    } return 'kurcina'
}

// console.log(firstOcc('aleksandar', 'z'));

//Exercise 6
/*Write a function to find the position of the last occurrence of a character in a string.
The result should be in human numeration form. If there are no occurrences of the character,
function should return -1.*/


function lastOcc(string, char) {
    for (var i = string.length; i >= 0; i--) {
        if (string[i] === char && i === 1) {
            return i + 'st'
        } else if (string[i] === char && i === 2) {
            return i + 'nd'
        } else if (string[i] === char && i === 3) {
            return i + 'rd'
        } else return i + 'th'
    } return -1
}

// console.log(lastOcc('limanada', 'a'));


//Exercise 7
/*Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]*/

function stringIntoArray(string) {
    var newArray = []
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newArray[i] = null
        } else {
            newArray[newArray.length] = string[i]
        }
    } return newArray
}

// console.log(stringIntoArray('My random string'));

//Exercise 8

/*Write a function that accepts a number as a parameter and checks if the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

function primeNum(num) {
    if (typeof num !== 'number') {
        return false
    } else if (num <= 1) {
        return false
    } else if (num === 2 || num % 2 === 1) {
        return num
    } else return false
}

console.log(primeNum(1230));

//Exercise 9

/*Write a function that replaces spaces in a string with provided separator. 
If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

function spaceReplace(string, separator) {
    var newStr = ''
    for (var i = 0; i < string.length; i++) {
        if (separator === undefined) {
            if (string[i] === ' ') {
                newStr += '-'
            } else newStr += string[i]
        } else {
            if (string[i] === ' ') {
                newStr += separator
            } else newStr += string[i]
        }
    } return newStr
}

// console.log(spaceReplace('My random string', '---'));


//Exercise 10
/*Write a function to get the first n characters and add “...” at the end of newly created string.*/

function addChar(string, num) {
    var newStr = ''
    for (var i = 0; i < string.length; i++) {
        if (i === num) {
            newStr += '...'
            return newStr
        } newStr += string[i]
    } return newStr
}

console.log(addChar('dojcinovic', 5));


//Exercise 11
/* Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]*/

function arrConverter(array) {
    newArr = []
    for (var i = 0; i < array.length; i++) {
        var c = array[i] * 1
        if (c !== c || c === -Infinity || c === Infinity) {
            continue
        }
        else {
            newArr[newArr.length] = c
        }
    } return newArr
}
console.log(arrConverter(["1", "21", undefined, "42", "1e+3", "aaaa", Infinity]));


//Exercise 12
/*Write a function to calculate how many years there are left until retirement based on the year of birth. 
Retirement for men is at age of 65 and for women at age of 60. 
If someone is already retired, a proper message should be displayed.*/

function retirement(birthYear, gender) {
    var currentYear = 2021
    if (gender === 'man' && currentYear - birthYear >= 65) {
        return gender + ' already retired'
    } else if
        (gender === 'man' && currentYear - birthYear < 65) {
        return 65 - (currentYear - birthYear) + ' years left'
    } else if
        (gender === 'woman' && currentYear - birthYear >= 60) {
        return gender + ' already retired'
    } else if (gender === 'woman' && currentYear - birthYear < 60) {
        return 60 - (currentYear - birthYear) + ' years left'
    }
}

// console.log(retirement(1995, 'man'));


//Exercise 13

/*Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/


function humanizeNumber(number) {
    var string = "" + number;
    if (string[string.length - 2] === '1' && (string[string.length - 1] === '1' || string[string.length - 1] === '2'
        || string[string.length - 1] === '3')) {
        return string += 'th'
    } else if (string[string.length - 1] === '1') {
        return string += 'st'
    } else if (string[string.length - 1] === '2') {
        return string += 'nd'
    } else if (string[string.length - 1] === '3') {
        return string += 'rd'
    } else return string += 'th'
}
// console.log(humanizeNumber(1123));


//Page 3

//Exercise 1

/*Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string" */

function insertString(string, stringToInsert, position) {
    var newString = ''
    if (position === undefined || position >= string.length) {
        newString = stringToInsert + ' ' + string
    }
    else {
        for (var i = 0; i < string.length; i++) {
            if (i === position) {
                newString += ' ' + stringToInsert + ' '
            } newString += string[i]
        }
    } return newString

}
// console.log(insertString('My random string', 'JS', 16));



//Exercise 8

/*Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"*/


// console.log(findAWord('The quick brown fox'));

console.log(2 < 3 + 5);