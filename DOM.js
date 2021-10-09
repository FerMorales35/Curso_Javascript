/*
document.getElementById('id') - Acceder a un elemento a traves de su id 

document | element.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector css

document | element.querySelectorALll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve

*/

/* const title = document.getElementById('title')
//Text content es una propiedad que permite la lectura y modificacion de nodos
title.textContent = 'DOM - Accediendo a nodos'

const paragraph = document.querySelector('.paragraph')
const span = paragraph.querySelector('span')
console.log(span.textContent) */

/* const paragraphs = document.querySelectorAll('.paragraph')

//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

//paragraphs[0].style.color = 'red'

//paragraphsSpread.map(p => p.style.color = 'green')

paragraphsArray.map(p => p.style.color = 'blue')

console.log(paragraphs) */


/*
Atributos 
element.getAttribute('attribute')
element.getAttribute('attribute')

Clases
element.classList.add('class','class',...)
element.classList.remove('class','class',...)
element.classList.toggle('class',[,force])
element.classList.contains('class')
element.classList.replace('oldClass', newClass)

Atributos directos
id
value
*/

const title = document.getElementById('title')
const name = document.getElementById('name')

//element.getAttribute('attribute')
console.log(name.getAttribute('type'))

//element.getAttribute('attribute')--
/* name.setAttribute('type','number')
name.setAttribute('type','radio')
name.setAttribute('type','date') */

//element.classList.add('class','class',...) --
//title.classList.add('main-title','other-title')
//title.classList.remove('title')

//element.classList.contains('class')
/* if(title.contains('title')) console.log('Title tiene la casa title')
else console.log('Title no contiene la casa title') */

//element.classList.replace('oldClass', newClass)--
title.classList.replace('title','main-title')

console.log(title.id)
console.log(name.value)




/* console.log(title)
console.log(name) */