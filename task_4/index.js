import {setRandomColor} from "./utils/setRandomColor.js";

const body = document.querySelector('body')

function handlerClick(div) {
    let count = 0
    div.innerHTML = `<span>${count}</span>`
    setRandomColor(div)
    return function () {
        count++
        div.innerHTML = `<span>${count}</span>`
        setRandomColor(div)
    }
}

const divContainer = document.createElement('div')
divContainer.classList.add('div-container')

for( let i = 0; i < 6; i++) {
    let div = document.createElement('div')
    div.addEventListener('click', handlerClick(div))
    divContainer.appendChild(div)
}

body.appendChild(divContainer)