//.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

const numbers = [12,25,47,84,98]
const numbers2 = numbers.map(number=>(number * 2))
console.log(numbers2)