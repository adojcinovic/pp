const searchApi = 'http://api.tvmaze.com/search/shows?q='


var input = 'kurac'
//search request

fetch(`${searchApi}${input}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
    })


//top 50 shows listed



function populatePage(data) {
    container = document.getElementById('pop-shows')
    data.forEach(e => {
        var card = createCard(e.img, e.title, e.id);
        card.addEventListener('click', function () {
            localStorage.setItem('id', e.id)
            window.location = './singleShow.html'
        })
        container.appendChild(card)
        // console.log(container);
    })
}



function createCard(img, title, id) {
    const poster = document.createElement('img');
    poster.src = img;
    const ime = document.createElement('p')
    ime.textContent = title
    const card = document.createElement('div')
    card.setAttribute('id', 'card')
    card.appendChild(poster);
    card.appendChild(ime);
    // console.log(card);
    return card
}



fetch('http://api.tvmaze.com/shows')
    .then(response => response.json())
    .then(data => {
        const filtered = data.filter((d, i) => i < 50);
        const top50 = filtered.map(function (e) {
            return {
                title: e.name,
                img: e.image.medium,
                id: e.id
            }
        })
        // console.log(top50);
        populatePage(top50)
    })