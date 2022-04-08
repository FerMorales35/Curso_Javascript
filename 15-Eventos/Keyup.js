//Keyup - Cuando soltamos una tecla

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

input.addEventListener("keyup", () => {
    console.log('Has soltado una tecla')
})