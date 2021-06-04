<<<<<<< HEAD
const input = document.querySelector('input');
const body = document.querySelector('body');
const input = document.querySelector('input')

=======
var input = document.querySelector('input');
var body = document.querySelector('body');
var input = document.querySelector('input')
console.log(input.value);
>>>>>>> a37f29bc5d2653a8c52a1a3cf4e4586e771230ea

function createUsers(users) {
    users.forEach((element) => {
        var img = document.createElement('img');
        var userName = document.createElement('p');
        img.src = `${element.avatar_url}`
        userName.textContent = `${element.login}`
        body.append(img, userName)
    });
    console.log(users);
}



function getItems() {
    var request = new XMLHttpRequest();

    request.open('GET', `https://api.github.com/search/users?q=${input.value}&per_page=5`);

    request.send()

    request.onload = function () {
        const data = JSON.parse(request.responseText).items;
        createUsers(data);
    }

}
var flag = false;

input.addEventListener('keydown', function (e) {
    if (flag) {
        location.reload()
        flag = false
    }
    if (e.keyCode === 13) {
        getItems();
        input.value = ''
        flag = true;
    }
})
