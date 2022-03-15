const button = document.getElementById('button')

button.addEventListener('click', () => {
    //Llamada a la libreria axios
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        //Datos a enviar
        data: {
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    }).then(res => console.log(res.data))
      .catch(err => console.log(err))
})