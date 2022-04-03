//.some(callback) - Comprueba si al menos un elemento del array cumple la condicion

const words = ['HTML','CSS','Javascript','PHP']
console.log(words.some(word => word.length > 15))
