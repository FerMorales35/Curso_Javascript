/*
while
*/

let pass = "";

while (pass != "hola") {
  pass = prompt("Introduzca su contraseña");
}

console.log("Fin del bucle");

/*
do while
*/

do {
  pass = prompt("Introduzca su contraseña");
} while (pass != "hola");

/*
For
*/

let numbers = [56,14,23,37,41,59]

for (let i = 0; i <= numbers.length -1; i++) {
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`);
}

/*
For of / For in
break -> Rompe el bucle
continue -> Se salta la/s posiciones que le indiquemos y despues continua su ejecucion
*/

let names = ['Fer','Eli','Tino']

for(let i = 0; i < names.length; i ++){
    if(names[i] === 'Eli'){
        continue
    }
}

/*for(let name of names){
    console.log(names.indexOf(name))
}*/

/*let names = ['Fer','Eli','Tino']

for(let index in names){
    console.log(index)
}*/
