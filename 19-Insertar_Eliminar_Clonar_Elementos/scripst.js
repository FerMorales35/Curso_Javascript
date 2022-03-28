/*
Insertar y eliminar elementos II

parent.insertBefore(newElement, referenceElement) - Insertar un elemento de antes del elemento de referencia

SOPORTE TOTAL
parent.insertAdjacentElement(position, element)
parent.insertAdjacentHTML(psotion, HTML)
parent.insertAdjacentText(position, text)

positions:
beforebegin - Antes de que empiece (hermano anterior)
afterbegin - despues de que empiece (primer hijo)
beforeend - antes de que acabe (ultimo hijo)
afterend - despues de que acabe (hermano siguiente)

parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = 'Soy un nuevo elemento'

//parent.insertBefore(newElement, referenceElement) - Insertar un elemento de antes del elemento de referencia
//list.insertBefore(newElement, list.children[0])

//parent.insertAdjacentElement(position, element)
//list.children[0].insertAdjacentElement('beforebegin', newElement)
//list.insertAdjacentElement('afterbegin', newElement)
//list.insertAdjacentElement('beforeend', newElement)
//list.children[0].insertAdjacentElement('afterend', newElement)

//parent.insertAdjacentHTML(psotion, HTML)
/* list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>') */

//parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
//list.replaceChild(newElement, list.children[1])


/*
DOM manipulation convenience methods - JQUERY Like

positions: 
parent.before() - Antes de que empiece (hermano anterior)
parent.prepend() - despues de que empiece (primer hijo)
parent.append() - antes de que acabe (ultimo hijo)
parent.after() - despues de que acabe (hermano siguiente)

child.replaceWith(newChild)*/

//list.children[0].before(newElement)
//list.prepend(newElement)
//list.append(newElement)
//list.children[1].after(newElement)

//list.children[0].replaceWith(newElement)

/*
Clonar y eliminar elementos
element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos -> para elementos sin ID
element.remove() - Elimina el nodo del DOM
element.removeChild(child) - Elimina el nodo hijo del DOM
*/

//list.after(list.cloneNode(true))
//list.remove()
//list.removeChild(list.children[0])

