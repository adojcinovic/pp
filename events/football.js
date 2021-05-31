var player = document.querySelector('.player');
var body = document.querySelector('body')


body.addEventListener('click', function (e) {
    player.style.top = `${e.clientY}px`
    player.style.left = `${e.clientX}px`
    console.log(e);
})