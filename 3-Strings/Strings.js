//Propiedades
//Propiedad lengt -> Devuelve la longitud de la cadena incluyendo espacios
let cadena = "Hola mundo"
console.log("Longitud de la palabra: " + cadena.length)

//Metodos --> Todos los metodos devuelven una cadena nueva, la cadena original no sera modificada
//toUppercase() -> devuelve la cadena en Mayusculas

console.log(cadena.toUpperCase())

//toLowerCase() -> devuelve la cadena en Minisculas

console.log(cadena.toLowerCase())

//indexOf(string) -> Devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1

console.log(cadena.indexOf("m"))

//Replace (valor a buscar, valor nuevo) -> Reemplza el fragmento de la cadena que le digamos y pone el valor nuevo

console.log(cadena.replace('mundo','Youtube'))

//Substring(inicio [,fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye). Si no se incluye el fin se extrae hasta el finaL

console.log(cadena.substring(3,8))

//Slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezara desde atras

console.log(cadena.slice(0,-6))

//trim()-> Elimina los espacios al inicio y al final de la cadena
let cadenaNueva = "  Hola, estamos trabajando con cadenas"

console.log(cadenaNueva.trim())

//starsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false

console.log(cadena.startsWith('H'))
console.log(cadena.startsWith('h'))

console.log(cadena.startsWith('m',5))

//endsWith(valor [,inicio]) -> Sirve para saber si la cadena termina con ese valor. Devuelve true o false

console.log(cadena.endsWith('o'))
console.log(cadena.endsWith('a',4))
console.log(cadena.endsWith('n',8))

//includes(valor [,inicio]) -> Igual que indeceOf pero devuelve true o false

console.log(cadena.includes('n'))
console.log(cadena.includes('a',5))
console.log(cadena.includes('a',2))

//repeat(valor) -> Repite el string el numero de veces que le indiquemos
let otraCadena = "Hola"

console.log(otraCadena.repeat(3))
console.log('r'.repeat(3))

//Template Strings
let nombre = 'Fernando'
let apellido = 'Morales'
let edad = 20

console.log('Hola ' + nombre + ' ' + apellido + '.Tienes ' + edad + ' años')
console.log(`Hola ${nombre} ${apellido}.Tienes ${edad} años`)
console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad + 1} años`)




