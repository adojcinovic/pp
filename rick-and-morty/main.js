import { getData } from './api.js';



getData().then(data => createChar(data));
var currentPage = 1


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

function changePages(currentPage) {
    var pages = []
    if (currentPage <= 3) {
        pages = [1, 2, 3, 4, 5]
    } else if (currentPage > 3 && currentPage <= 26) {
        pages = [currentPage - 2, currentPage - 1, currentPage, currentPage
            + 1, currentPage + 2]
    } else if (currentPage > 26 && currentPage < 30) {
        pages = [26, 27, 28, 29, 30]
    }
}
