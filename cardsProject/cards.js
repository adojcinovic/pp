var players = [
    {
        name: 'Nikola Jokic',
        num: '15',
        position: 'center',
        photo: './images/203999.png'
    },
    {
        name: 'Aaron Gordon',
        num: 50,
        position: 'forward',
        photo: './images/aarongordon.png'
    },
    {
        name: 'Michael Porter Jr.',
        num: 1,
        position: 'forward',
        photo: './images/porterjr.png'
    },
    {
        name: 'Facundo Campazzo',
        num: 7,
        position: 'guard',
        photo: './images/i.png'
    },
    {
        name: 'Austin Rivers',
        num: 25,
        position: 'guard',
        photo: './images/austinrivers.png'
    },
    {
        name: 'Monte Morris',
        num: 11,
        position: 'guard',
        photo: './images/montemorris.png'
    },
    {
        name: 'Paul Milsap',
        num: 4,
        position: 'power forward',
        photo: './images/paulmillsap.png'
    },
    {
        name: 'Markus Howard',
        num: 00,
        position: 'center',
        photo: './images/markushoward.png'
    },
    {
        name: 'JaVale McGee',
        num: 34,
        position: 'center',
        photo: './images/javalemcgee.png'
    },
    {
        name: 'JaMychal Green',
        num: 0,
        position: 'forward',
        photo: './images/green.png'
    },
    {
        name: 'Shaquile Harrison',
        num: 3,
        position: 'shooting guard',
        photo: './images/shaquile.png'
    },
    {
        name: 'Vlatko Cancar',
        num: 31,
        position: 'center',
        photo: './images/cancar.png'
    },
    {
        name: 'Zeke Nnaji',
        num: 22,
        position: 'forward',
        photo: './images/zeke.png'
    }
];




var firstTeam = document.querySelector('.first-team')
var subs = document.querySelector('.subs')

function createPage(array) {
    for (var i = 0; i < array.length; i++) {
        var card = document.createElement('div');
        var img = document.createElement('img');
        var name = document.createElement('h2');
        var number = document.createElement('h3');
        var position = document.createElement('p')
        card.setAttribute('class', 'card');
        img.src = array[i].photo;
        name.textContent = array[i].name;
        number.textContent = array[i].num;
        position.textContent = array[i].position;
        if (i < 5) {
            firstTeam.append(card);
            card.append(img);
            card.append(name);
            card.append(number);
            card.append(position)
        } else {
            subs.append(card);
            card.append(img);
            card.append(name);
            card.append(number);
            card.append(position)
        }
    }
}

function shufleArr(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var perm = arr[i];
        arr[i] = arr[j];
        arr[j] = perm;
    }
    return arr
}

function substitute() {
    var startingFive = document.querySelectorAll('.first-team div');
    var random1 = Math.floor(Math.random() * startingFive.length);
    var el1 = startingFive[random1];

    var substitution = document.querySelectorAll('.subs div');
    var random2 = Math.floor(Math.random() * substitution.length);
    var el2 = substitution[random2]



    firstTeam.appendChild(el2);
    subs.appendChild(el1)

}


createPage(shufleArr(players));
setInterval(substitute, 2000)