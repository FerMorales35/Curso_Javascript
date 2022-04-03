/*
.splice(a,b.items) -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
a- Indice de inicio
b- Numero de elementos
items- elementos a añadir en el caso de que se añadan
*/

let numbers = [1,2,3,4,5]

//numbers.splice(3) -> Elimina desde la poscion a hasta el final
/* numbers.splice(3)
console.log(numbers) */

//numbers.splice(2,2) -> Elimina desde la posicion 2 el numero valores que le indiquemos (segundo)
/* numbers.splice(2,2) 
console.log(numbers) */

//numbers.splice(2,2,10,23,54) -> Si b es un valor distinto de 0 elimina el numero de valores que indiquemos en b y añade los valores de items a partir de la posicion a
/* numbers.splice(2,2,10,23,54)
console.log(numbers) */

//numbers.splice(2,0,10,23,54) -> Si b vale 0 añade los elementos a partir de la posicon a y no elimina ninguno
numbers.splice(2,0,10,23,54)
console.log(numbers) 