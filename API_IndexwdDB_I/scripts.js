//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

/*ES una manera de almacenar datos de manera persistente en el navegador.
Almacena pares de llave-Valor. Los valores pueden ser objetos con estructuras complejas, y las llaves pueden ser propiedades de esos objetos.
La API de IndexDB es mayormente asincrona.
IndexedDB usa eventos DOM para notificar cuando los resultados estan disponibles.
IndexedDB es orientada a objetos.

Crear base de datos 

-Crear la base de datos a traves del objeto IndexedDB y el metodo open()
-Comprobar si la base de datos existe o tiene que ser creada a traves del emtodo onupgradeneeded
-Crear almacen de objetos con el metodo createObjectStore()
-Escuchar los eventos de exito y de error con los metodos onsuccess() y oneerror()
*/

//indexedDB 
const indexedDB = window.indexedDB
const form = document.getElementById('form')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            autoIncrement: true
        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data)
    })
}