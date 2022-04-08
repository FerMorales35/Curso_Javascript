//Keydown - Cuando pulsamos una tecla

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

input.addEventListener("keydown", () => {
    console.log('Has pulsado una tecla')
})