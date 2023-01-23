import {randomNumber} from "./getRandomNumber.js";

export function setRandomColor(element) {
    element.style.background = `rgb(${randomNumber(0,256)},${randomNumber(0,256)},${randomNumber(0,256)})`
}