//.sort([callback]) - Ordena los elementos de un array alfabeticamente(Valor unicode), si le pasamos un callback los ordena en funcioon del algoritmo que le pasemos

const letters = ['b','c','z','a']
console.log(letters.sort())

//Menor a mayor
const number = [1,8,100,300,3]
console.log(number.sort((a,b)=>a-b))

//Mayor a menor
const number2 = [1,8,100,300,3]
console.log(number2.sort((a,b)=>b-a)) 