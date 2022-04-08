//mouseleave - Cuando pulsamos y no soltamos el boton izquierdo del raton

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

box.addEventListener("mouseleave", () => {
    box.classList.replace('green', 'red')
})