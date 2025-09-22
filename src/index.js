import './style.css'
import { contactTab, initialPage, menuTab } from './initialPage.js'

//initialPage();
//menuTab();
//contactTab();

let homeButton = document.querySelector("#homeButton")
let menuButton = document.querySelector("#menuButton")
let aboutButton = document.querySelector("#aboutButton")

homeButton.addEventListener('click', () => {
    initialPage();
})

menuButton.addEventListener('click', () => {
    menuTab();
})

aboutButton.addEventListener('click', () => {
    contactTab();
})



console.log("Hola")