

const input = document.querySelector('input')
const content = document.querySelector('div')
const iframe = document.querySelector('iframe')

const ytlink = 'https://www.youtube.com/watch?v='
// path to thumbnail e.snippet.thumbnails.default.url



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


    request.onload = function () {
        const data = JSON.parse(request.responseText).items;
        createContent(data);
    }

    request.send()
}

getData()

input.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        content.innerHTML = ''
        getData();
        input.value = ''

    }
})