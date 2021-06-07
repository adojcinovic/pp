const id = localStorage.getItem('id')

console.log(id);


fetch('http://api.tvmaze.com/shows')
    .then(response => response.json())
    .then(data)


function populatePage(data) {
    container = document.getElementById('single-show')
    data.forEach(e => {
        var card = createCard(e.img, e.title, e.id, e.summary);
        console.log(container);
        container.appendChild(card)
    })
}



function createCard(img, title, id, summary) {
    const poster = document.createElement('img');
    poster.src = img;
    const ime = document.createElement('h1')
    ime.textContent = title
    const opis = document.createElement('p')
    opis.textContent = `${id}. ${summary}`
    const card = document.createElement('div')
    card.setAttribute('id', 'single-show')
    card.appendChild(poster);
    card.appendChild(ime);
    card.appendChild(opis)
    // console.log(card);
    return card
}