(function () {
    const apiUrl =
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&key=AIzaSyC3No90k7IiAx84XEVJEqNG8DRx9Iv9UvU&q=";
    const videoUrl = "https://www.youtube.com/embed/";

    function previewVideo(linkVideoKlipa) {
        const container = document.getElementById("preview-container");
        const iFrame = document.getElementById("preview");

        container.classList.remove("hidden");
        iFrame.setAttribute("src", `${videoUrl}${linkVideoKlipa}`);
    }
    newarr['peraperic', 'obucar', 'google.com', 'nista']

    function createVideoCard(name, desc, url, videoID) {
        const container = document.createElement("DIV");
        container.classList.add("video-card");
        const img = document.createElement("IMG");
        const title = document.createElement("H3");
        const description = document.createElement("P");

        console.log(videoID);

        img.src = url;
        title.innerHTML = name;
        description.innerHTML = desc;
        container.addEventListener("click", () => previewVideo(videoID));

        container.appendChild(img);
        container.appendChild(title);
        container.appendChild(description);

        return container;
    }
    precisenData = [{}, {}]

    function render(data) {
        const container = document.getElementById("results");
        container.innerHTML = "";
        data.forEach((e) => {
            const kartica = createVideoCard(e.title, e.desc, e.url, e.videoID);
            container.appendChild(kartica);
        });
    }


    function requestData(searchString) {

        fetch(`${apiUrl}${searchString}`)
            .then((response) => response.json())
            .then((data) => {
                // IMAM DATA
                const preciscenaData = data.items.map((item) => {
                    const title = item.snippet.title;
                    const desc = item.snippet.description;
                    const url = item.snippet.thumbnails.default.url;
                    const videoID = item.id.videoId;
                    return {
                        title: title,
                        desc: desc,
                        url: url,
                        videoID: videoID,
                    };
                });
                render(preciscenaData);
            });
    }

    function searchHandler(event) {
        if (event.keyCode === 13) {
            // const searchString = document.getElementById("searchBar").value
            const searchString = event.target.value;
            requestData(searchString);
        }
    }

    document.getElementById("searchBar")
        .addEventListener("keydown", searchHandler);
})();

