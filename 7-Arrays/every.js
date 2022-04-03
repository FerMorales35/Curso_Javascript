//.every(callback) - Comprueba si todos los elementos del array cumplen la condicion

const words = ['HTML','CSS','Javascript','PHP']
console.log(words.every(word => word.length > 3))