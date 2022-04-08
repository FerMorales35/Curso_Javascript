//mouseup - Cuando soltamos el boton izquierdo del raton

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

box.addEventListener("mouseup", () => {
    console.log('Has soltado el boton izquierdo en la caja')
})