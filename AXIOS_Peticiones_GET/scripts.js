//Axios es una librería JavaScript que puede ejecutarse en el navegador y que nos permite hacer sencillas las operaciones como cliente HTTP, por lo que podremos configurar y realizar solicitudes a un servidor y recibiremos respuestas fáciles de procesar. Esta basada en promesas. Transforma automaticamente de JSON
//Para peticiones API REST -> axios 

const button = document.getElementById('button')

button.addEventListener('click', () => {
    //Llamada a la libreria axios
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        //Recorremos res -> res representa todo el objeto, recorremos los datos de la respuesta de la peticion
        for (const userInfo of res.data) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})