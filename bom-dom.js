var list1 = document.getElementById('li1')
// var list2 = document.getElementById('li3')


function changeColor(list) {
    list.className = 'color'
}

changeColor(list1)

function changeColor2() {
    var arr = document.getElementById('li2').querySelectorAll('li')
    for (var i = 0; i < arr.length; i++) {
        arr[i].className = 'color-2'

    }
}

function changeColorAgain() {
    var list2 = document.getElementById('li3').querySelectorAll('li')
    for (var i = 0; i < list2.length; i++) {
        list2[i].className = 'color-3'

    }
}

function traversing() {
    var item = document.querySelector('.active')
    item.className = '';
    item.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = 'active'
    console.log(item.parentElement);
    console.log(item);

}

traversing()
changeColor2()
changeColorAgain()

