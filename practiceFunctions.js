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

// console.log(primeNum(17));

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

// console.log(addChar('dojcinovic', 5));


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
// console.log(arrConverter(["1", "21", undefined, "42", "1e+3", "aaaa", Infinity]));


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


//Exercise 2
/*Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.*/

var originalArray = [NaN, 0, 15, false, -22, 'blabla', undefined, 47, null, Infinity];

function joinElements(array) {
    var string = ''
    for (var i = 0; i < array.length; i++) {
        if (array[i] === null || array[i] === undefined || array[i] === Infinity || array[i] !== array[i]) continue
        string += array[i] + ' '
    } return string
}

// console.log(joinElements(originalArray));
// console.log(originalArray[0] === originalArray[0]);



//Exercise 3
/*Write a program to filter out falsy values from the array.*/

var testArray = [NaN, 0, 15, false, -22, '', undefined, 47, null] /* [15, -22, 47]*/

function filterFalsy(array) {
    var newArr = []
    for (var i = 0; i < array.length; i++) {
        if (array[i]) newArr[newArr.length] = array[i]
    } return newArr
}

// console.log(filterFalsy(testArray));

//Exercise 4

/*Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number*/
var numberToCheck = 12345

function reverseNum(num) {
    var reversed = '' + num;
    var reversed2 = ''
    for (var i = reversed.length - 1; i >= 0; i--) {
        reversed2 += reversed[i]
    } return Number(reversed2);
}


// console.log(reverseNum(987654321));
// console.log(0 || null && 5 || 6);

//Exercise 5

/*Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] */

function lastNElement(array, n) {
    var newArr = []
    for (var i = array.length - n; i < array.length; i++) {
        newArr[newArr.length] = array[i]
    } return newArr
}

// console.log(lastNElement([7, 9, 0, -2, 10, true, false, 'deeeesi'], 4));


//Exercise 6
/*Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function createArray(numOfTimes, value) {
    var newArr = []
    for (var i = 0; i < numOfTimes; i++) {
        newArr[newArr.length] = value
    } return newArr
}

// console.log(createArray(3, 'Nikola Skejdz'));


//Exercise 7
/*Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.*/

function perfectNum(num) {
    var number = 0;
    for (var i = 1; i <= num / 2; i++)
        if (num % i === 0) {
            number += i
        }
    if (number === num) {
        return num + ' is a perfect number'
    } else return num + ' is NOT a perfect number'
}

// console.log(perfectNum(300));

//Exercise 8

/*Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"*/


function wordInString(string, word) {
    var count = 0
    var searchIndex = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] === word[searchIndex]) {
            searchIndex++
            if (searchIndex === word.length) {
                searchIndex = 0
                count++
            }
        }
    } return 'word ' + word + ' was found ' + count + ' times'
}


// console.log(wordInString('aa bb aa cc dd aa', 'aa'));

// console.log(3 > 5 < 10);



//Exercise 9

/*Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */


var ad = 'myemailaddraaess@bgit.rs'

function findEmail(email, shortener) {
    var firstChars = ''
    var emailSufix = ''
    for (var i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            for (var j = i; j < email.length; j++) {
                emailSufix += email[j]
            }
        } else if (i < shortener) {
            firstChars += email[i]
        }
    } return firstChars + '...' + emailSufix
}
// console.log(findEmail('adojcinovic@gmail.rs', 3));

// Exercise 9 with flag concept implementation


function findEmail2(email) {
    var shortEmail = '';
    var shouldCopy = true;
    for (var i = 0; i < email.length; i++) {
        if (i === 3) {
            shouldCopy = false
            shortEmail += '...'
        } if (email[i] === '@') {
            shouldCopy = true
        } if (shouldCopy) {
            shortEmail += email[i]
        }
    } return shortEmail
}

// console.log(findEmail2(ad));

// Exercise 10

/*Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] */

var arrToCheck = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function frequency(array) {
    var maxChar = '';
    var maxFreq = 0;
    var counter = 0
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[j] === array[i]) {
                counter++
            }
        } if (counter > maxFreq) {
            maxFreq = counter
            maxChar = array[i]
        }
        counter = 0
    } return maxFreq + maxChar
}


// console.log(frequency(arrToCheck));

//Page 5

//Exercise 1
/*Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

var test = [3, 500, 12, 149, 53, 414, 1, 19];

function minMax(arr) {
    var max = -Infinity;
    var min = Infinity
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
        if (arr[i] < min) min = arr[i]
    } for (var i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            arr[i] = min
        } else if (arr[i] === min) {
            arr[i] = max
        }
    } return arr
}

// console.log(minMax(test));

//Exercise 2
/*Use the following array to make a new one by dividing its values by two and adding 5. 
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

var arrayToTest = [2, 3, 500, -10, 149, 53, 414, 1, 19];

function divider(arr) {
    var output = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] / 2 + 5 === 0) {
            output[output.length] = 20
        } else {
            output[output.length] = arr[i] / 2 + 5
        }
    } return output
}

// console.log(divider(arrayToTest));

//Exercise 3

/* Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

var students = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"]
var grades = [50, 39, 63, 72, 99, 51, 83, 59]

function displayGrades(students, grades) {
    var marks = ''
    for (var i = 0; i < students.length; i++) {
        if (grades[i] <= 50) {
            marks += students[i] + ' ' + grades[i] + ' exam failed! '
        } else if (grades[i] > 50 && grades[i] <= 59) {
            marks += students[i] + ' ' + grades[i] + ' exam passed with mark 6. '
        } else if (grades[i] >= 60 && grades[i] <= 69) {
            marks += students[i] + ' ' + grades[i] + ' exam passed with mark 7. '
        } else if (grades[i] >= 70 && grades[i] <= 79) {
            marks += students[i] + ' ' + grades[i] + ' exam passed with mark 8. '
        } else if (grades[i] >= 80 && grades[i] <= 89) {
            marks += students[i] + ' ' + grades[i] + ' exam passed with mark 9. '
        } else marks += students[i] + ' ' + grades[i] + ' exam passed with mark 10. '
    } return marks
}

// console.log(displayGrades(students, grades));


//Exercise 6
/*Write a program that uses a loop to add all the even numbers from 1 to 1000,
 and subtracts all the odd numbers 1 to 500 from the calculated sum. 
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function addNumbers() {
    var even = 0
    var odd = 0
    for (var i = 0; i <= 1000; i++) {
        if (i % 2 === 0) {
            even += i
        }
    } for (var i = 0; i <= 500; i++) {
        if (i % 2 === 1) {
            odd += i
        }
    } return (even - odd) * 12.5
}

// console.log(addNumbers());

//Exercise 7

/*Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) 
in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]*/

var array1000 = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

// console.log(array1000[1][0]);

function twoLetters(array) {
    var newString = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > 2) {
            newString += array[i][0] + array[i][1]
        }
    } return newString
}

// console.log(twoLetters(array1000));



//Exercise 8

/*Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB */

function reversingString(string) {
    var reversedString = ''
    for (var i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    } return reversedString
}

// console.log(reversingString('Belgrade Institute of Technology'));


//Exercise 9
/*Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible combinations, as well.
(E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */


function numComb(num1, num2) { //num2 arg has to be bigger for function to work
    if (num1 >= num2) return 'first parameter has to be lower than the second parameter'
    var combinations = ''
    var combCounter = 0
    for (var i = num1; i <= num2; i++) {
        for (var j = num1; j <= num2; j++) {
            if (i !== j) {
                combinations += i + '.' + j + ' '
                combCounter++
            }
        }
    } return combinations + 'number of combinations is ' + combCounter
}


// console.log(numComb(1, 7));

//Exercise 10

/* Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false */

function primeCheck(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    } return true
}

// console.log(primeCheck(2))

//Exercise 11

/*Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true */


function palindrome(string) {
    var original = ''
    var reversed = ''
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') continue;
        else original += string[i]
    } for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === ' ') continue;
        else reversed += string[i]
    } if (original === reversed) {
        return string + ' is palindrome' + ' = ' + reversed
    } else return false
}


// console.log(palindrome('no lemon, no melon'))


//Exercise 12

/*Write a program that calculates the greatest common divisor of two integers.
Note: The greatest common divisor of two non-zero integers is the greatest positive number
that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9 */


function commonDivisor(int1, int2) {
    if (int1 === int2) return int1
    var commonDiv = 0
    for (var i = 0; i < int1; i++) {
        if (int1 % i === 0 && int2 % i === 0) {
            commonDiv = i
        }
    } return commonDiv
}

// console.log(commonDivisor(5689332154, 598))

// same same but optimized

function commonDivisor2(num1, num2) {
    var commonDiv = 0
    if (num1 === num2) return num1
    var min = num1 < num2 ? num1 : num2
    for (var i = min; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            commonDiv = i
            break
        }
    } return commonDiv
}

console.log(commonDivisor2(999, 888))


//Page 6

//Exercise 1

/* Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */

//expression moze da se svede na vrednost
//function expression var a = function()
//function declaration function blabla ()


