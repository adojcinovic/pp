const id = localStorage.getItem('id')

console.log(id);


fetch(`http://api.tvmaze.com/shows/${id}`)
    .then(response => response.json())
    .then(data => {
        const image = data.image.original
        const summary = data.summary;
        const name = data.name
        const id = data.id
        container = document.getElementById('single-show')
        var card = createCard(image, name, id, summary)
        container.appendChild(card)
        // console.log(data);
    })



function createCard(img, title, id, summary) {
    const poster = document.createElement('img');
    poster.src = img;
    const ime = document.createElement('h1')
    ime.textContent = title
    const opis = document.createElement('p')
    opis.innerHTML = summary
    const card = document.createElement('div')
    card.setAttribute('id', 'single-show')
    card.appendChild(poster);
    card.appendChild(ime);
    card.appendChild(opis)
    // console.log(card);
    return card
}

fetch(`http://api.tvmaze.com/shows/${id}/cast`)
    .then(response => response.json())
    .then(data => {
        var cast = data.map(function (e) {
            return e.person.name
        })
        createCastSeasons(cast)
        console.log(cast);
    })


function createCastSeasons(cast) {
    const ekipicaSezone = document.getElementById('glumci-sezone');
    const list = document.createElement('ul');
    cast.forEach(function (e) {
        var macgluSezona = document.createElement('li')
        macgluSezona.textContent = e
        console.log(macgluSezona);
        list.appendChild(macgluSezona)
    })
    console.log(list);
    ekipicaSezone.appendChild(list)
}

fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
    .then(response => response.json())
    .then(data => {
        const seasons = data.map(function (e) {
            return e.premiereDate + ' - ' + e.endDate
        })
        console.log(seasons);
        console.log(data);
        createCastSeasons(seasons)
    })
