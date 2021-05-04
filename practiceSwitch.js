//switch practice


var timeOfTheDay = 'a';

var meal = '';

switch (timeOfTheDay) {
    case 'morning':
        meal = 'breakfast';
        break;
    case 'afternoon':
        meal = 'lunch';
        break;
    case 'evening':
        meal = 'dinner';
        break;
    default:
        meal = 'nothing';
    // break;
}
// console.log('have', meal);

//Exercises

/* 1-2. Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”.*/

var day = 4;

output = ''

switch (day) {
    case 1:
        output = 'Monday';
        break;
    case 2:
        output = 'Tuesday';
        break;
    case 3:
        output = 'Wednsday';
        break;
    case 4:
        output = 'Thursday';
        break;
    case 5:
        output = 'Friday';
        break;
    case 6:
        output = 'Saturday';
        break;
    case 7:
        output = 'Sunday'
        break;
    default:
        output = 'Please select number 1-7'
}
// console.log(output);

/*3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
        For input 2, output should be “It’s weekday”.
        For input 6, output should be “It’s weekend”.
        For input 12, output should be “Input must be number between 1 and 7”.*/

switch (day) {
    case 6:
    case 7:
        output = 'Weekend';
        break
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        output = 'Weekday';
        break
    default:
        output = 'Please select number 1-7'
}
// console.log(output);

/* 4.   Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name.
         All other cases output a message explaining that input must be a number between 1 and 12.
        For input 2, output should be “February”.
        For input 6, output should be “June”.
        For input 13, output should be “Input must be a number between 1 and 12”..
   5.   Write a program that for a 1-12 number input (representing a month in a year) shows what season it is.
        All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. */



var selectMonth = 12;
var month = ''
var season = ''

switch (selectMonth) {
    case 1:
        month = 'January';
        season = 'Winter';
        break;
    case 2:
        month = 'February';
        season = 'Winter';
        break;
    case 3:
        month = 'March';
        season = 'Winter';
    case 4:
        month = 'April';
        season = 'Spring';
    case 5:
        month = 'May';
        season = 'Spring';
        break;
    case 6:
        month = 'June';
        season = 'Spring';
        break;
    case 7:
        month = 'July';
        season = 'Summer';
        break;
    case 8:
        month = 'August';
        season = 'Summer';
        break;
    case 9:
        month = 'September';
        season = 'Autumn';
        break;
    case 10:
        month = 'October';
        season = 'Autumn';
        break;
    case 11:
        month = 'November';
        season = 'Winter'
        break;
    case 12:
        month = 'December';
        season = 'Winter'
        break;
    default:
        console.log('Enter a number between 1-12');
}
console.log('Month is', month, 'and it\'s', season);

/*6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: 
    A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".*/


var grade = 'B';
var message = ''
switch (grade) {
    case 'A':
        message = 'Good job!';
        break;
    case 'B':
        message = 'Very good';
        break;
    default:
        message = 'Unknown grade';
        break;
}
console.log(message);


/*7. Write a program that takes as input a city name and outputs the country where the city is.
    You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities.
    Note that each country must have a different number of cities.
    Input different from the listed cities should output a message"Please choose a different city".*/

var city = 'Lahore';
var country = '';

switch (city) {
    case 'Lahore':
    case 'Karachi':
    case 'Islamabad':
        country = 'Pakistan';
        break
    case 'Sozopol':
        country = 'Bulgaria';
        break;
    case 'Cape Town':
    case 'Johanesbourg':
        country = 'South Africa';
        break;
    case 'Osaka':
    case 'Tokyo':
    case 'Kyoto':
    case 'Kobe':
        country = 'Japan';
        break;
    case 'Belgrade':
    case 'Novi Sad':
    case 'Nis':
    case 'Kragujevac':
    case 'Leskovac':
        country = 'Serbia';
        break;
}
console.log(country);

var num1 = 0;
var num2 = 6;
var str = '/';
var res;

switch (str) {
    case '+':
        res = num1 + num2;
        break;
    case '-':
        res = num1 - num2;
        break;
    case '*':
        res = num1 * num2;
        break;
    case '/':
        if (num2 === 0) console.log('You cannot divide 0');
        else res = num1 / num2;
        break;
}
console.log(res);