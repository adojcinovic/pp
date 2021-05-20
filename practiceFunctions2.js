//file practiceFunctions.js extended

//Page 6

//Exercise 1

/* Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */


function countVowels(string) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    var counter = 0
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (vowels[j] === string[i]) {
                counter++
            }
        }
    } return counter
}

// console.log(countVowels('AEIOUaeiou'));


//Exercise 2
/* Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */


var letters = ['a', 'b', 'c']
var numbers = [1, 2, 3, 4]


function combineArrays(array1, array2) {
    var output = []
    for (var i = 0; i < array1.length; i++) {
        output[output.length] = array1[i]
        output[output.length] = array2[i]
    }; return output
}

// console.log(combineArrays(letters, numbers));


//Exercise 3
/* Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

var list = [1, 2, 3, 4, 5, 6]

function rotateList(array, indexOfRotation) {
    var newList = []
    for (var i = indexOfRotation; i < array.length; i++) {
        newList[newList.length] = array[i]
    } for (var i = 0; i < indexOfRotation; i++) {
        newList[newList.length] = array[i]
    }; return newList
}

// console.log(rotateList(list, 5));

//Exercise 4
/* Write a function that takes a number and returns array of its digits. */

function arrayOfDigits(number) {
    var str = '' + number
    var arr = []
    for (var i = 0; i < str.length; i++) {
        arr[arr.length] = Number(str[i])
    }; return arr
}

// console.log(arrayOfDigits(12345));


//Exercise 5
/* Write a program that prints a multiplication table for numbers up to 12. */

function multipication() {
    var table = ''
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
            table += (i * j) + ' '
        }
        table += '\n'
    }
    return table
}

// console.log(multipication());


//Exercise 6
/* Write a function to input temperature in Centigrade and convert to Fahrenheit. */
//(0°C × 9/5) + 32 = 32°F
//(32°F − 32) × 5/9 = 0°C


function celsiusToFarenheitConverter(degreesC) {
    return (degreesC * 9 / 5) + 32;
}

// console.log(celsiusToFarenheitConverter(15));


//Exercise 7
/* Write a function to find the maximum element in array of numbers. Filter out all non-number elements. */

var elements = ["M", NaN, 12, "Steve", 11, "John", 99, "Mark", true, "A"];

function maxNumber(array) {
    var max = -Infinity
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            max = array[i]
        }
    } return max
}

console.log(maxNumber(elements))