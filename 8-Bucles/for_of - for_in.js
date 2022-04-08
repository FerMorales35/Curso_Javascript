/* For of / For in
break -> Rompe el bucle
continue -> Se salta la/s posiciones que le indiquemos y despues continua su ejecucion */

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