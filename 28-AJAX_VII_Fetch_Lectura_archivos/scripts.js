/*
    Fetch API
        blob(): Binary Long OBject
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla

        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg = document.getElementById('button-img')
const buttonPDF = document.getElementById('button-pdf')

buttonImg.addEventListener('click', () => {
    //Peticion del recurso
    fetch('dog.jpg')
    //Retorna la promesa
        .then(res => res.blob())//Objeto largo binario
        .then(img => {
            //Crea la ruta para visualizar el archivo
            document.getElementById('img').src = URL.createObjectURL(img)//Construye un link para visualizar el archivo
        })
})

buttonImg.addEventListener('click', () => {
    //Peticion del recurso
    fetch('demo.pdf')
    //Retorna la promesa
        .then(res => res.blob())//Objeto largo binario
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})