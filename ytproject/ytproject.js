const ytKey = 'AIzaSyBgxA-FQ4toSpAr4f84sVG6MCKxBheCafg';

const input = document.querySelector('input')
const videos = document.querySelector('videos')



const ytlink = 'https://www.youtube.com/watch?v='
// path to thumbnail e.snippet.thumbnails.default.url

function renderData(data) {
    data.map(e => {
        var thumbnail = `${e.snippet.thumbnails.default.url}`;
        var title = `${e.snippet.title}`;
        var description = `${e.snippet.description}`;
        createCard(thumbnail, title, description)
    })
}

function createCard(slika, naslov, opis) {
    var thumbnail = document.createElement('img');
    var title = document.createElement('h3');
    var description = document.createElement('p');
    thumbnail.src = slika;
    title.innerText = naslov;
    description.innerText = opis;
    videos.append(thumbnail, title, description)
}


function createContent(videos) {
    console.log(videos);
    videos.forEach(function (e) {
        var listOfVideos = document.createElement('div');
        var thumbnail = document.createElement('img');
        thumbnail.addEventListener('click', function () {
            console.log(e);
            iframe.setAttribute('src', `${ytlink}${e.id.videoId}`)
            console.log(iframe.src);
        })
        var video = document.createElement('div')
        var title = document.createElement('h3')
        var description = document.createElement('p')
        video.append(thumbnail);
        video.append(title);
        video.append(description);
        thumbnail.src = `${e.snippet.thumbnails.default.url}`;
        title.textContent = `${e.snippet.title}`;
        description.textContent = `${e.snippet.description}`;
        listOfVideos.append(video)
        content.append(listOfVideos)
    })
}

function getData() {
    var request = new XMLHttpRequest();

    request.open('GET', `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${input.value}&key=${ytKey}`);

    request.send()

    request.onload = function () {
        const data = JSON.parse(request.responseText).items;
        renderData(data); // here is data that was requested
    }

}

getData()

// input.addEventListener('keydown', function (event) {
//     if (event.keyCode === 13) {
//         content.innerHTML = ''
//         getData();
//         input.value = ''

//     }
// })