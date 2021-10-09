/*
Spread Operator (operador de expansion)

Su sintasis es ...

*/

/* const numbers = [-12,2,3,23,43,2,3] */

//Enviar elementos en un array a una funcion

/* const addNumbers = (a,b,b) =>{
    console.log(a+b+c)
}

//addNumbers(1,2,3)

let numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd) */

//Añadir un array a otro array

/* let users = ['javier','david','rosa','juan','mercedes']
let newUsers = ['marta','jaime','laura']

users.push(...newUsers)
console.log(users) */

//Copiar arrays

/* let array1 = [1,2,3,4]
let array2 = [...array1]
console.log(array2) */

//Concatenar arrays
/* let array1 = [1,2,3,4]
let array2 = [6,7,8] */

//let arrayConcat = array1.concat(array2)
//console.log(arrayConcat)

/* let arrayConcat = [...array1, ...array2]
console.log(arrayConcat) */

//Enviar un numero indefinido de argumentos a una funcion (parametros REST)

/* const restParms = (...numbers) => {
    console.log(numbers)
}

restParms() */

//Libreria Math 
const numbers = [-12,2,3,23,43,2,3]

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

//Eliminar elementos duplicados
console.log([...new Set(numbers)])