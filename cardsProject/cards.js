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
        card.setAttribute('class', 'card');
        var img = document.createElement('img');
        img.src = array[i].photo;
        var name = document.createElement('h2');
        name.textContent = array[i].name;
        var number = document.createElement('h3');
        number.textContent = array[i].num;
        if (i < 5) {
            firstTeam.append(card);
            card.append(img);
            card.append(name);
            card.append(number);
        } else {
            subs.append(card);
            card.append(img);
            card.append(name);
            card.append(number);
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



createPage(shufleArr(players))
