//dblclick - Cuando pulsamos dos veces seguidas el boton izquierdo del raton

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

button.addEventListener("dblclick", () => {
    console.log("Doble CLICK");
}) 