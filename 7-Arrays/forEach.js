//.forEach(callback(currentValue), [index])) - ejecuta la funcion indicada una vez por cada elemento del array.

const numbers = [12,25,47,84,98]

numbers.forEach((number)=>console.log(number))
numbers.forEach((number,index)=>console.log(`${number} esta en la posicion ${index}`))