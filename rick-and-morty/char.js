import { getChar } from './api.js'

getChar(localStorage.getItem('id')).then(data => createOneChar(data))

function createOneChar(data) {
    console.log(data)
    const singlePoster = document.getElementById('single-poster')
    const container = document.createElement('div')
    container.setAttribute('id', 'poster')
    const image = document.createElement('img')
    const name = document.createElement('h3')
    const gender = document.createElement('p')
    const status = document.createElement('p')
    image.src = data.image
    name.innerText = data.name
    gender.innerText = data.gender
    status.innerText = data.status
    container.appendChild(image)
    container.appendChild(name)
    container.appendChild(gender)
    container.appendChild(status)
    singlePoster.appendChild(container)
}
