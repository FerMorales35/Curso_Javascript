/* function saludar(){
    console.log('Hola')
}

saludar() */

/* const saludar = () => console.log('Hola')

//solo un parametro se puede omitir el ()
const saludarUsuario = (user) => console.log(`Hola ${user}`)
const saludarUsuario = user => console.log(`Hola ${user}`)

saludarUsuario('Fernando') */


//Las llaves al final de la funcion llevan return
/* const suma = (num1, num2) => num1 + num2

console.log(suma(2,3)) */


/*
Actualmente las funciones se escriben con este formato
*/
const suma = (num1, num2) =>{
    if(num1 == num2){
        return num1 + num2
    }else{
        console.log('Esto no se va a ejecutar si entra en el if')
        return num1
    }
}
console.log(suma(7,3))

/* const suma = (num1 ,num2) => num1 + num2
let result = suma(3,6)
console.log(result) */