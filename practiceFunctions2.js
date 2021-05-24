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

// console.log(maxNumber(elements))

//Exercise 8
/* Write a function to find the maximum and minimum elements. Function returns an array. */

var numbersArr = [5, 46, 1000, 55, 44, 1]

function minMax(array) {
    var min = +Infinity;
    var max = -Infinity;
    maxMin = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        } else if (array[i] > max) {
            max = array[i]
        }
    } for (var i = 0; i < 1; i++) {
        maxMin[maxMin.length] = max
        maxMin[maxMin.length] = min
    }; return maxMin
}
// console.log(minMax(numbersArr));


//Exercise 9
/* Write a function to find the median element of array. */

var list = [1, 2, 3, 4, 5, 6]

function medianElement(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i]
    } return sum / array.length
}

// console.log(medianElement(list));


//LESSON
// string methods indexOf() lastIndexOf() charAt() toUpperCase() toLowerCase() slice() substring() split() concat() search() match() replace() replaceAll() last 4 use RegEx as param
//array methods push() pop() shift() unShift() join() slice() splice() concat()
//object methods defineProperty() hasOwnProperty() freeze() 
//number properties toFixed() toString() 

var a = {
    name: 'aleksandar'
}

// console.log(a.name.valueOf());

var obj = {}

Object.defineProperty(obj, 'name', {
    value: 'aleksandar',
    writable: true,
    enumerable: true
})

// ENDLESSON


//Exercise 10
/* Write a function to find the element that occurs most frequently. */

var arrToCheck = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function frequency(array) {
    var maxFreq = 0;
    var maxEle = ''
    var counter = 0
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] === array[i]) {
                counter++
            }
        } if (counter > maxFreq) {
            maxFreq = counter
            maxEle = array[i]
        } counter = 0

    } return maxEle + maxFreq
}

// console.log(frequency(arrToCheck));


//Exercise 11
/*Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.
If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned. */


for (var i = 0; i < 100; i++) {
    // console.log(Math.ceil(Math.random() * 100));
}

// console.log(Date.now());



var arrToCheck = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]


function addEl(array) {
    var newArr = []
    for (var i = 0; i < array.length; i++) {
        newArr[newArr.length] = i
        newArr[newArr.length] = i
    } return newArr
}

// console.log(addEl(arrToCheck));

var duplicates = [1, 4, 2, 3, 4, 4, 5, 6, 8, 7]


function findDuplicates(array) {
    var newArr = []
    for (var i = 1; i < array.length; i++) {
        if (newArr.indexOf(array[i]) === array[i])
            continue
        else newArr.push(array[i])
    } return newArr
}

// console.log(findDuplicates(duplicates));


//built in objects exercise

/*Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */
var Input = [-1, 8.1, 3, 6, 2.3, 44, 2.11]

function isOddArr(array) {
    if (array.length % 2 === 1) {
        return false;
    } else return true
}

// console.log(isOddArr(duplicates));

function someFunc(array) {
    var count = 0
    var middleEl;
    if (array.length % 2 === 0) {
        return console.log('error');
    } middleEl = array[array.length / 2]
    for (var i = 0; i < array.length; i++) {
        if (array[i] < middleEl)
            counter++
    } return counter
}



var test = [1, 4, -2, 11, 8, 1, -2, 3];

function findMin(arr) {
    var min = Math.min(...arr);
    var last = arr.lastIndexOf(min);
    var output = {
        minValue: min,
        minlastIndex: last
    }
    return output
}

// console.log(findMin(test));

/*Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
        Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
    Output: [’Programming’, ‘product’] */
var pro = ['JavaScript', 'Programming', 'fun', 'product']


function findPro(array) {
    var newArr = []
    for (var i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().substring(0, 3) === 'pro') {
            newArr.push(array[i])
        }
    } return newArr
}

console.log(findPro(pro));