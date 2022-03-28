const button = document.getElementById("button");

/*
Objeto window - Es el objeto global, de el descienden todos los objetos
alert()
prompt()
conmfirm()
*/

//alert('Hola')

/* addEventListener('click', (e)=>{
    console.log(e)
}) */

/* let name = prompt('Escriba su nombre') 
console.log(name)*/

/* if(confirm('Acepta?')){
    console.log('El usuario acepto')
}else{
    console.log('El usuario no acepto')
} */

/*
Objeto console - Es el objeto que contiene la consola del navegador
console.log()
console.dir()
console.error()
console.table()

*/

/* console.log(button)
console.error('error') */

const person = {
  name: "Fernando",
  age: 30,
  email: "Fernando@gmail.com",
}

//console.table(person)

/*
Objeto location - Es el objeto que contiene la barra de direcciones
location.href
location.protocol
location.host
location.pathname
location.hash
location.reload()
*/

/* console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash) */
//console.log(location.reload)

//location.href = 'https://www.google.com/'

/*
Objeto history
back()
forward()
go(n|-n)

Propiedad
lenght

*/

/* history.back()
history.forward()
history.go(2) --> Paginas hacia adelante */

//history.length

/*
Objeto date
*/
/* 
const date = new Date()
console.log(date.getFullYear()) */

/*
Timers
Time-out:

setTimeout(()=>{code}, delay-in-milliseconds) - Hace que se ejecute la funcion despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia). Si la funcion es externa no poner (()=>

Interval:
setInterval(()=>{code}, delay-in-milliseconds) - Hace que se ejecute la funcion cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/* button.addEventListener("click", () => {
    setTimeout(saludar,3000)
    setTimeout(()=>{
        console.log('ADIOS')
    },3000)
})*/

/* const saludar = () => {
  console.log("Hola")
} */

/* const timeout = setTimeout(()=>{
    console.log('Adios')
},3000)

button.addEventListener("click", () => {
clearTimeout(timeout)
}) */

const saludar = () => {
    console.log("Hola")
  }

let cont = 0  

//const interval = setInterval(saludar, 3000)

const interval = setInterval(()=>{
    console.log(cont)
    cont++
},3000)

button.addEventListener("click", () => {
    clearInterval(interval)
})