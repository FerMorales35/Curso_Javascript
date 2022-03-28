/*1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings*/

/* let nombre = prompt('Ingresa tu nombre')
let edad = parseInt(prompt('Ingresa tu edad'))

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad + 1} años`) */

/*2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)*/

/* let base;
let altura;
let figura;

do {
  figura = parseInt(
    prompt("Calcular area de 1-Triangulo 2-Rectangulo 3-Circulo"))
} while (figura < 1 || figura > 3);

if (figura == 1) {
  base = parseInt(prompt("Ingresa base del triangulo"))
  altura = parseInt(prompt("Ingresa altura del triangulo"))
  console.log(`El area del Triangulo es ${(base * altura) / 2}`)
} else if (figura == 2) {
  base = parseInt(prompt("Ingresa base del rectangulo"))
  altura = parseInt(prompt("Ingresa altura del rectangulo"))
  console.log(`El area del Triangulo es ${base * altura}`)
} else {
  let radio = parseInt(prompt("Ingresa radio del circulo"))
  console.log(`El area del Triangulo es ${Math.PI * Math.pow(radio, 2)}`)
} */

/*3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar*/

/* let numero = parseInt(prompt('Ingresa un numero'))

for(let i = 0; i <= numero ; i++){
    if(i % 2 == 0){
        console.log(`El ${i} es par`)
    }else{
        console.log(`El ${i} es impar`)
    }
} */

/*4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad*/

/* let numero = parseInt(promp("Introduce un numero"))
let divisores = 0

if (numero == 1) console.log("El numero 1 no es valido")
else {
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      console.log(`${numero} / ${i} = ${numero / i} No es primo`)
      divisores++
      break;
    }
  }
}

if(divisores == 0) console.log(`${numero} es primo`) */


/*5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad. !5 = 5*4*3*2*1 = 120*/

/* let numero = parseInt(promp('Introduce un numero'))
let result = 1

for(let i = numero; i >= 1; i--){
    result *= i
}

console.log(`El factorial de ${numero} es ${result}`) */

/*6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido*/

/* let numero = 0
let acumulador = 0
let contador = 0

do{
    numero = parseInt(prompt("Ingresa un numero"))
    acumulador += numero
    contador++
}while(acumulador <= 50)

console.log(`El total ingresado es ${acumulador} y se ingresaron ${contador} numeros`) */

/*7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares*/

let array = [2,6,9,7,13]
let pares = []
let impares = []
let resultado = 0;

let numRandom = Math.round(Math.random() * (10 - 1) + 1)

/* for(let i = 0; i <= array.length -1; i ++){
    resultado = array[i] * numRandom;
    if(resultado % 2 == 0){
        pares.push(resultado)
    }else{
        impares.push(resultado)
    }
}
console.log("Array de pares " + pares)
console.log("Array de impares " + impares)  */

/* for(let numero of array){
    resultado = numero * Math.round(Math.random() * 10 + 1)
    console.log(`${numero} * ${numRandom} = ${resultado}`)
    if(resultado % 2 == 0){
        pares.push(resultado)
    }else{
        impares.push(resultado)
    }
}
console.log("Array de pares " + pares)
console.log("Array de impares " + impares) */

/*8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23*/

/* const letras = ['T','R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

let valor = 0;

do{
   dni = prompt('Ingresa un DNI de 8 digitos')
}while(dni.length < 8 || dni < 0)

letra = dni % 23
console.log(valor)

console.log("Le corresponde la letra: " + letras[letra]) */

/*9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.*/

/* let contadorVocales = 0
let contadorConsonantes = 0
const palabra = prompt('Ingresa una palabra').toLowerCase()

for(let letra of palabra){
    if(letra == 'a' || letra == 'e' ||  letra == 'i' || letra == 'o'|| letra == 'u'){
        contadorVocales++
    }
    else{
        contadorConsonantes++
    }
} */

console.log('Cantidad de vocales ' + contadorVocales)
console.log('Cantidad de consonantes ' + contadorConsonantes)
console.log('La longitud de la palabra ingresa es: ' + palabra.length) 

/*10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.*/

let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

const ingresarColor = prompt("Ingrear un color").toLowerCase()

if(colores.indexOf(color) !== -1){
    console.log('Tu color se encuentra en el array')
}else{
    console.log('Tu color no esta definido')
}
