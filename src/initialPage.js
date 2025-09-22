function initialPage() {
    cleanTab();
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

function menuTab() {
    cleanTab();
    let contentBoxMenu = document.querySelector("#content")

    let headline = document.createElement("header")
    headline.textContent = "Menú"

    let pizzaMenu = document.createElement("div")
    pizzaMenu.textContent = "Pizza"

    let sodaMenu = document.createElement("div")
    sodaMenu.textContent = "Soda"

    contentBoxMenu.appendChild(headline)
    contentBoxMenu.appendChild(pizzaMenu)
    contentBoxMenu.appendChild(sodaMenu)
}

function contactTab() {
    cleanTab();
    let contentBox = document.querySelector("#content")

    let contact = document.createElement("div")
    contact.textContent = "Contacto"

    contentBox.appendChild(contact)
}

function cleanTab() {
    let contentBox = document.querySelector("#content")

    while (contentBox.lastElementChild) {
        contentBox.removeChild(contentBox.lastElementChild);
    }

}

export { initialPage, menuTab, contactTab }