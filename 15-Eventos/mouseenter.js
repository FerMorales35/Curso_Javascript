//mouseenter - Cuando entramos en la zona que tiene el evento

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

box.addEventListener("mouseenter", () => {
    box.classList.replace('red', 'green')
})