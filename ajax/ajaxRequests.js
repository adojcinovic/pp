var body = document.querySelector('body');
var image = document.querySelector('img')
var button = document.querySelector('button')


function requestImg() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://dog.ceo/api/breeds/image/random');


    request.onload = function () {
        const img = JSON.parse(request.responseText);
        image.setAttribute('src', img.message)
    }

    request.send()
}


button.addEventListener('click', requestImg)


