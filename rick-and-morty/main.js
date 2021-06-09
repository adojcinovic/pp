import { getData } from './api.js';



getData().then(data => createChar(data));



function createChar(data) {
    const container = document.getElementById('wrapper');
    data.forEach(function (e) {
        const card = document.createElement('div')
        card.setAttribute('id', 'card')
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const button = document.createElement('button')
        button.setAttribute('id', 'like-button')
        image.src = e.image
        name.innerText = e.name
        button.innerText = 'LIKE'
        card.addEventListener('click', function () {
            localStorage.setItem('id', e.id)
            window.location = './char.html'
        })
        card.appendChild(image)
        card.appendChild(name)
        card.appendChild(button)
        container.appendChild(card)
    })
    console.log(container);
}

