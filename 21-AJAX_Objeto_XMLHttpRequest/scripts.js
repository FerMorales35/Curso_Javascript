//AJAX -> ¿Qué es y para qué sirve AJAX?
//AJAX, acrónimo de Asynchronous JavaScript And XML (JavaScript asíncrono y XML), es una técnica de desarrollo web para crear aplicaciones web asíncronas

//Preguntar en consola version anterior --> 'XMLHttpRequest' in window

const button = document.getElementById("button")

button.addEventListener("click", () => {
  //Guardar la respuesta
  let xhr //Objeto para guardar la respuesta AJAX
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
  else xhr = new ActiveXObject("Microsoft.XMLHTTP")
  
  //Abrir conexion
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

  //Informacion en el objeto
  xhr.addEventListener('load', (data) => {
      //JSON -> a Objeto
      const dataJSON = JSON.parse(data.target.response)

      const list = document.getElementById('list')
      for(const userInfo of dataJSON){
         const listItem = document.createElement('LI')
         listItem.textContent = `${userInfo.id} - ${userInfo.name}`
         list.appendChild(listItem)
      }

  })

  //Enviar peticion
  xhr.send()

})
