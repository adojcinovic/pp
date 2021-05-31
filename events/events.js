var button = document.querySelector('.button')
var dugme = document.querySelector('.dugme')


function toggle() {
    button.classList.toggle('bc')
}

function turnOff() {
    dugme.removeAttribute('onclick')
}

function reset() {
    dugme.setAttribute('onclick', 'toggle()')
}
