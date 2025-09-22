function initialPage() {
    let contentBox = document.querySelector("#content")

    let headline = document.createElement("div")
    headline.id = "headline"

    let headerPizzaPlace = document.createElement("header")
    headerPizzaPlace.textContent = "Freddy Pizza Place";

    let wonderfulText = document.createElement("div")
    wonderfulText.textContent = "It's the best pizza place on the planet"

    contentBox.appendChild(headline)
    headline.appendChild(headerPizzaPlace)

    contentBox.appendChild(wonderfulText)

}

function homeTab() {
    let contentBoxHome = document.querySelector("#content")

    let headline = document.createElement("div")
    headline.id = "headline"

    let headerPizzaPlace = document.createElement("header")
    headerPizzaPlace.textContent = "Freddy Pizza Place";

    let wonderfulText = document.createElement("div")
    wonderfulText.textContent = "It's the best pizza place on the planet"

    contentBox.appendChild(headline)
    headline.appendChild(headerPizzaPlace)

    contentBox.appendChild(wonderfulText)
}

function menuTab() {
    let contentBoxMenu = document.querySelector('#content')

    let headline = document.createElement("header")
    headline.textContent = "Menú"

    let pizzaMenu = document.createElement("div")
    headline.textContent = "Pizza"

    let sodaMenu = document.createElement("div")
    headline.textContent = "Soda"

    contentBoxMenu.appendChild(headline)
    contentBoxMenu.appendChild(pizzaMenu)
    contentBoxMenu.appendChild(sodaMenu)
}

function contactTab() {
    let contentBox = document.querySelector("#content")

    let contact = document.createElement("div")
    contact.textContent = "Contacto"
}

export { initialPage, menuTab, contactTab }