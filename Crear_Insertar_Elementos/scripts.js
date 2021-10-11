//---Dom - Crear e insertar elementos

/*
   Crear un elemento: document.createElement(element)
   Escribir texto en un elemento: element.textContext = texto
   Escribir HTML en un elemento: element.innerHTML = codigo HTML

   Añadir un elemento al DOM: parent.appendChild(element)

   Fragmentos de codigo: document.createDocumentFragment()
*/

const days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo','Valor extra','Otro valor']

/* const title = document.getElementById('title')
const daysList = document.getElementById('daysList') */
const selectDays = document.getElementById('daysSelect')


title.innerHTML = 'Dom - <span>Crear e insertar elementos I</span>'

/* const fragment = document.createDocumentFragment()

for(const day of days){
    const itemList = document.createElement('li')
    itemList.textContent = day
    fragment.appendChild(itemList)  
}
daysList.appendChild(fragment) */

const fragment = document.createDocumentFragment()

for(const day of days){
    const selectItem = document.createElement('option')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

//El appendChild() es un método que añade un nodo como el último hijo de un nodo
selectDays.appendChild(fragment)

