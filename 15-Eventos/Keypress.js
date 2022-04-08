//Keypress - Cuando pulsamos una tecla y no la soltamos

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box") 

input.addEventListener("keypress", () => {
    console.log('Estas pulsando una tecla')
})