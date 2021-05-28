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

var paragraph = document.querySelector('div p').textContent;


var ra = document.querySelector('div p').textContent = 'kurcina'.toLocaleUpperCase()



console.log(paragraph);

var lista = ['tanko', 'debelo', 'jebanje keve'];
var main = document.querySelector('.sviranje-kurcu')

function createDropdown(array, node) {
    var select = document.createElement('select');

    for (var i = 0; i < array.length; i++) {
        var option = document.createElement('option');
        option.textContent = array[i]
        select.appendChild(option)
    } node.appendChild(select)
}

createDropdown(lista, main)


/* Attributes
Create a form that contains multiple input elements with labels.
Some of those elements should be required.

Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borders.
*/
//done with bootstrap