var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');


function createCounter(param) {
    var counter = 0
    btn3.addEventListener('click', function () {
        counter = 0
    });
    return function () {
        counter += param
        console.log(counter);
    }
}



btn1.addEventListener('click', createCounter(5));
btn2.addEventListener('click', createCounter(1));