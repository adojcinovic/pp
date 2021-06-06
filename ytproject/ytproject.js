const ytKey = 'AIzaSyBgxA-FQ4toSpAr4f84sVG6MCKxBheCafg';



const ytlink = 'https://www.youtube.com/embed/'
// path to thumbnail e.snippet.thumbnails.default.url

function showVideo(videoId) {
    const container = document.getElementById('preview-container')
    const iframe = document.getElementById('preview')
    container.classList.remove('hidden');
    iframe.setAttribute('src', `${ytlink}${videoId}`)
}



function createContent(videoID, description, title, img) {
    const card = document.createElement('div');
    card.classList.add('card')
    const thumbnail = document.createElement('img');
    const label = document.createElement('h3');
    const desc = document.createElement('p');
    thumbnail.src = img;
    desc.innerHTML = description;
    label.innerHTML = title;
    card.appendChild(thumbnail);
    card.appendChild(label);
    card.appendChild(desc)
    card.addEventListener('click', () => showVideo(videoID))
    return card

}



function renderPage(data) {
    const content = document.getElementById('videos');
    content.innerHTML = ''
    data.forEach((e) => {
        var card = createContent(e.videoUrl, e.opis, e.naslov, e.slika);
        content.appendChild(card)
    })
}

function getData(searchString) {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchString}&key=${ytKey}`)
        .then((res) => res.json())
        .then((data) => {
            const cleanData = data.items.map((item) => {
                const videoID = item.id.videoId;
                const description = item.snippet.description;
                const title = item.snippet.title;
                const img = item.snippet.thumbnails.default.url;
                return {
                    videoUrl: videoID,
                    opis: description,
                    naslov: title,
                    slika: img
                }
            })
            renderPage(cleanData);
            console.log(cleanData);

        })
}

// getData('pera')



function searchHandler(event) {
    if (event.keyCode === 13) {
        var searchString = event.target.value
        getData(searchString)
    }
}


document.getElementById('searchBar').addEventListener('keydown', searchHandler)