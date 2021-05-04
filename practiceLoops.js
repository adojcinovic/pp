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
console.log(res);

//Loops exercises


/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

for (i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i, 'even');
    } else {
        console.log(i, 'odd');
    }
}

/* 2. Write a program to sum the multiples of 3 and 5 under 1000.*/

for (i = 1; i <= 1000; i++) {

}