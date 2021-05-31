var message = document.querySelector('.text')
var button = document.querySelector('.button')
var main = document.querySelector('.main')



function sendMessage() {
    var msg = message.value
    var p = document.createElement('p')
    p.innerHTML = msg
    main.appendChild(p)
    message.value = ''
}