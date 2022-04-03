//.slice(a,b) -> Extrae elementos de un array desde el inicio hasta el indice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original

let numbers = [1,2,3,4,5]

/* 
let newNumbers3 = numbers.slice()
console.log(numbers)
console.log(newNumbers3) */

/* let newNumbers4 = numbers.slice(2)
console.log(numbers)
console.log(newNumbers4)
 */

let newNumbers5 = numbers.slice(2,4)
console.log(numbers)
console.log(newNumbers5) 