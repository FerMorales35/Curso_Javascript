/*Estrucutas para almacenar datos y agruparlos.
Se pueden llenar con cualquier dato valido en JS y deben ir separados por comas.
Se declaran con llaves cuadradas y corchetes.
Pueden declararse vacios o con un contenido establecido.
Pueden añadirse o eliminarse elementos en el momento que queramos*/

/* let array = []

let numeros = [1,2,3,4] */

/*Cada elemento podra se identificado por su indice, es decir por su posicion
Los indices empiezan en 0.*/

/* let numero = [1,2,3,4,5]
console.log(numero)
console.log(numero[2])

let palabras = ['hola','estamos','en','Youtube']
console.log(`La palabra ${palabras[1]} tiene ${palabras[1].length} letras`) */

/*
Arrays - Propiedad
Array.lenght -> devuelve el numero de posiciones que contiene el array.
*/
/* 
let numbers = [1,2,3,4,5]

console.log(numbers.length) */

/* 
Arrays - Metodos
Array.isArray(variable a evaluar) -> Devuelve true si la variable es un array.
*/

/* let number = 4

console.log(Array.isArray(number))
console.log(Array.isArray(numbers)) */

/*
Eliminar un elemento
.shift() -> Elimina el primer elemento del array y devuelve ese elemento
.pop() -> Elimina el ultimo elemento de un array y devuelve ese elemento
*/

/* console.log(numbers)
let deleteElement = numbers.shift()
console.log(deleteElement)
numbers.pop()
console.log(numbers) */

/*
Añadir elementos
.push(element1, element 2,...) -> Añade uno o mas elementos al final del array y devuelve la nueva longitud.
.unshift(element1, element 2,...) -> Añade uno o mas elementos al comienzo del array y devuelve la nueva longitud.
*/

/* let newLenght = numbers.push(6)
console.log(newLenght)

let newLenght2 = numbers.unshift(0)
console.log(newLenght2) */

/*
.indexOf() -> Devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/
/* 
console.log(numbers)
console.log(numbers.indexOf(5)) */

/*
.lastIndexOf() -> Devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado
*/

/* console.log(numbers)
console.log(numbers.lastIndexOf(1)) */

/*
.reverse() -> Invierte el orden de los elementos del array.
*/

/* console.log(numbers)
numbers.reverse()
console.log(numbers) */

/*
.join(separador) -> Devuelve un string con el separador que indiquemos, por defecto son comas
*/

/* console.log(numbers)
let arrayString = numbers.join(' ')
console.log(arrayString)
let arrayString2 = numbers.join('-') */

/*
.splice(a,b.items) -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
a- Indice de inicio
b- Numero de elementos
items- elementos a añadir en el caso de que se añadan
*/

//console.log(numbers)
//numbers.splice(3) -> Elimina desde la poscion a hasta el final
//numbers.splice(2,2) -> Elimina desde la posicion 2 el numero valores que le indiquemos (segundo)
//numbers.splice(2,2,10,23,54) -> Si b es un valor distinto de 0 elimina el numero de valores que indiquemos en b y añade los valores de items a partir de la posicion a
//numbers.splice(2,0,10,23,54) -> Si b vale 0 añade los elementos a partir de la posicon a y no elimina ninguno
//console.log(numbers) 

/*
.slice(a,b) -> Extrae elementos de un array desde el inicio hasta el indice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original
*/

/* let newNumbers3 = numbers.slice()
console.log(numbers)
console.log(newNumbers3)

let newNumbers4 = numbers.slice(2)
console.log(numbers)
console.log(newNumbers4)

let newNumbers5 = numbers.slice(2,4)
console.log(numbers)
console.log(newNumbers5) */


/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*
Arrays -Metodos

.from(iterable) - Convierte en array el elemento iterable
*/

/* let word = 'Hola mundo'
console.log(Array.from(word)) */

/*
.sort([callback]) - Ordena los elementos de un array alfabeticamente(Valor unicode), si le pasamos un callback los ordena en funcioon del algoritmo que le pasemos
*/

/* const letters = ['b','c','z','a']
console.log(letters.sort())

//Menor a mayor
const number = [1,8,100,300,3]
console.log(number.sort((a,b)=>a-b))

//Mayor a menor
const number2 = [1,8,100,300,3]
console.log(number2.sort((a,b)=>b-a)) */

/*
.forEach(callback(currentValue), [index])) - ejecuta la funcion indicada una vez por cada elemento del array.
*/

/* const numbers = [12,25,47,84,98]

numbers.forEach((number)=>console.log(number))
numbers.forEach((number,index)=>console.log(`${number} esta en la posicion ${index}`)) */

/*
.some(callback) - Comprueba si al menos un elemento del array cumple la condicion
*/

/*
.every(callback) - Comprueba si todos los elementos del array cumplen la condicion
*/


/* const words = ['HTML','CSS','Javascript','PHP']
console.log(words.some(word => word.length > 2))
console.log(words.every(word => word.length > 3)) */

/*
.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
*/

/* const numbers = [12,25,47,84,98]
const numbers2 = numbers.map(number=>(number * 2))
console.log(numbers2) */

/*
.filter(callback) - Filtra todos los elemtnos del array que cumplan la condicion y devuelve un nuevo array
*/

/* const numbers = [12,25,47,84,98]
const numbers2 = numbers.filter(number=>number > 40)
console.log(numbers2) */

/*
.reduce(callback) - Reduce todos los elementos del array a un unico valor - opera por pares
*/

const numbers = [1,2,3,4,5]
console.log(numbers.reduce((a,b)=>a+b))

const users = [
    {
        name: 'User1',
        online: true
    },
    {
        name: 'User2',
        online: true
    },
    {
        name: 'User3',
        online: false
    },
    {
        name: 'User4',
        online: true
    },
    {
        name: 'User5',
        online: false
    },
    {
        name: 'User5',
        online: true
    }
]

const usersOnline = users.reduce((cont, user)=>{
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conectados`)