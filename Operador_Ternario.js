//Se utiliza cuando una condiccion sera true o false
//La ejecucion puede tener una o varias sentencias, separadas por comas y entre parentesis

let num = 2;

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`)

(num % 2 == 0) ? (console.log(`${num} es par`),console.log(`${num} es par 2`)):(console.log(`${num} es impar`),console.log(`${num} es impar 2`))