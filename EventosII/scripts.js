const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");

//Escucha el evento
/* input.addEventListener("keyup", (e) => {
  console.log(e);
}) */

/* button.addEventListener("click", (e) => {
  console.log(e.target)
  console.log("Hiciste click")
}) */

/* const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (e)=>{
    e.target.classList.add('red')
}) */

const link = document.getElementById('link')

button.addEventListener('click', () =>{
    input.value = 'Has hecho click'
})

link.addEventListener('click', (e) =>{
    //evita que ejecute el evento definido por defecto
    e.preventDefault()
    button.click()
})

/* form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('El formulario se ha enviado')
}) */

