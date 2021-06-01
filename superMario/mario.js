var body = document.querySelector('body')
var img = document.querySelector('img')
let position = 0
let moving = false
let int;


console.log(body);

function moveRight(e) {
    if (e.keyCode === 39) {
        if (!moving) {
            img.classList.toggle('rotate2')
            img.setAttribute('src', '/images/mario_running.gif')
            int = setInterval(moveBackgroundRight, 100)
            moving = true
        }
    }
}


function moveLeft(e) {
    if (e.keyCode === 37) {
        if (!moving) {
            img.classList.toggle('rotate');
            img.setAttribute('src', '/images/mario_running.gif')
            int = setInterval(moveBackgroundLeft, 100)
            moving = true
        }
    }

}

function jump(e) {
    if (e.keyCode === 38) {
        img.classList.add('jumping')
    }
}

function fall(e) {
    console.log("fref")
    if (e.keyCode === 38) {
        img.classList.remove('jumping')
    }
}


function stop(e) {
    if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 38) {
        img.setAttribute('src', '/images/mario.png')
        moving = false;
        clearInterval(int)
    }
}



function moveBackgroundRight() {
    body.style.backgroundPosition = `${position}px bottom`
    position -= 20
}

function moveBackgroundLeft() {
    body.style.backgroundPosition = `${position}px bottom`
    position += 20
}

body.addEventListener('keydown', moveRight)
body.addEventListener('keydown', moveLeft)
body.addEventListener('keydown', jump)
body.addEventListener('keyup', fall)
body.addEventListener('keyup', stop)