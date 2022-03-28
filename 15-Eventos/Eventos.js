/*
Eventos de raton:
click - Cuando pulsamos el boton izquierdo del raton
dblclick - Cuando pulsamos dos veces seguidas el boton izquierdo del raton
mouseenter - Cuando entramos en la zona que tiene el evento
mouseleave - Cuando pulsamos y no soltamos el boton izquierdo del raton
mousedown - Cuando pulsamos el boton izquierdo del raton
mouseup - Cuando soltamos el boton izquierdo del raton
mousemove - Cuando movemos el raton

Eventos del teclado
Keydown - Cuando pulsamos una tecla
Keyup - Cuando soltamos una tecla
Keypress - Cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

 button.addEventListener("click", () => {
  console.log("CLICK");
})

button.addEventListener("dblclick", () => {
    console.log("Doble CLICK");
}) 

/* box.addEventListener("mouseenter", () => {
    box.classList.replace('red', 'green')
})

box.addEventListener("mouseleave", () => {
    box.classList.replace('green', 'red')
}) */

/* box.addEventListener("mousedown", () => {
    console.log('Has pulsado en la caja')
})

box.addEventListener("mouseup", () => {
    console.log('Has soltado el boton izquierdo en la caja')
}) */

/* box.addEventListener("mousemove", () => {
    console.log('Estas moviendo el raton en la caja')
}) */

/* input.addEventListener("keydown", () => {
    console.log('Has pulsado una tecla')
})

input.addEventListener("keyup", () => {
    console.log('Has soltado una tecla')
})

input.addEventListener("keypress", () => {
    console.log('Estas pulsando una tecla')
}) */