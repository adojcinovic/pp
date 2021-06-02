var input = document.querySelector('input')

function createUsers(users) {
    console.log(users);
}



function getItems() {
    var request = new XMLHttpRequest();

    request.open('GET', `https://api.github.com/search/users?q=pera&per_page=5`);


    request.onload = function () {
        const data = JSON.parse(request.responseText);
        createUsers(data.items);
    }

    request.send()
}

getItems()
createUsers()
// input.addEventListener('keydown', getData)