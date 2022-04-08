//mousedown - Cuando pulsamos el boton izquierdo del raton

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

box.addEventListener("mousedown", () => {
    console.log('Has pulsado en la caja')
})