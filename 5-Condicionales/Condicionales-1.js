let numero = 5
let otroNumero = 0

if(numero > 0) console.log(`${numero} es mayor a 0`)

//Condicional compuesto
if(numero > 0){
    console.log(`${numero} es mayor a 0`)
}else{
    console.log(`${numero} es menor a 0`)
}

//Condicional multiple
if(otroNumero > 0){
    console.log(`${otroNumero} es mayor a 0`)
}else if(otroNumero < 0){
    console.log(`${otroNumero} es menor a 0`)
}else{
    console.log(`${otroNumero} es igual a 0`)
}

//Operadores Logicos -> && y ||
if(numero > 0){
    if(otroNumero > 0){
        console.log(`${numero} y ${otroNumero} son mayores que 0`)
    }else if(otroNumero < 0){
        console.log(`${numero} es mayor que 0 y num 2 es menor que 0`)
    }else{
        console.log(`${numero} es mayor que 0 y num 2 es igual que 0`)
    }
}else if(numero < 0){
    if(otroNumero > 0){
        console.log(`${numero} no es mayor que 0 y ${otroNumero} es mayor que 0`)
    }else if(otroNumero < 0){
        console.log(`${numero} y ${otroNumero} son mayores que 0`)
    }else{
        console.log(`${numero} es menor que 0 y num 2 es igual a 0`)
    }
}else{
    if(otroNumero > 0){
        console.log(`${numero} es igual a 0 y ${otroNumero} es mayor que 0`)
    }else if(otroNumero < 0){
        console.log(`${numero} es igual a 0 y ${otroNumero} es menor que 0`)
    }else{
        console.log(`${numero} y ${otroNumero} son iguales a 0`)
    }
}

let word = 'Hola'

if(word.length > 4){
    console.log(`${word} tiene mas de 4 letras`)
}else if(word.length > 4){
    console.log(`${word} tiene menos de 4 letras`)
}else{
    console.log(`${word} tiene 4 letras`)
}