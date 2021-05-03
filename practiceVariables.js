var firstName;
firstName = 'Aleksandar';

console.log(firstName);

var age;
var birthYear = 1989;
var year = 2021;

age = year - birthYear

console.log(age);
var bananasInKgs = 1.2;
var gramsInKgs = 1000;
var bananasInGrams = bananasInKgs * gramsInKgs;

console.log(bananasInGrams);

var anna = 5 * 60;

console.log(anna);

var newsArticles = 98;
var kbsInGbs = 1000000;
var usbStickInGbs = 4;
var usbStickinKbs = usbStickInGbs * kbsInGbs;
var numOfArticles = usbStickinKbs / newsArticles;

console.log('Number of articles in 4gb us stick:', numOfArticles);

var a = 1;
var b = 2;
var c = 3;
a *= 2;
b += 2;
c -= 1;

console.log(a, b, c);

console.log(typeof "number", typeof 23, typeof null, typeof undefined, typeof NaN, typeof false);

console.log('If type of Nan is true:', NaN === true);

var ageAleksandar = 32;

console.log('Age more than 0:', ageAleksandar > 0);
console.log('Age less than 120:', ageAleksandar < 120);

var speed = 80;
var safeSpeed = 'Safe speed:'
var driveSafely = speed < 120 && speed > 60;

console.log(safeSpeed, driveSafely);

var ra = 'bog sunca'