const person = {
    name: 'Fernando',
    age: 37,
    sons: ['Laura', 'Diego','Pepe','Rosa','Tomas']
}

//console.log(person.name)
console.log(person['name'])

/*claves no valores*/
/* for(const key in person){
    console.log(key)
} */

/*Claves y valores*/
for(const key in person){
    console.log(person[key])
}

/* for(const son of person.sons){
    console.log(son)
} */

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}`)