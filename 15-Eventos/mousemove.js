//mousemove - Cuando movemos el raton

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

box.addEventListener("mousemove", () => {
    console.log('Estas moviendo el raton en la caja')
})