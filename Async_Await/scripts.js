//Funcion asincrona - No se ejecuta de forma secuencial
//async devuelva una promesa
/* const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Simula consulta a una api o BD
            resolve('Fernando')
        }, 1500)
    })
}


const sayHello = async () => {
    //Establecemos un bloqueo hasta que getName se resuelva
    const name = await getName()
    return `Hello ${name}`
}

//Ejecuta la funcion una vez que la promesa se retorna
sayHello().then(res=>console.log(res)) */

/*-------------------Ejemplo------------------*/

const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
    if (!user) throw new Error(`Doesn't exist an user with id ${id}`)
    else return user
}

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) throw new Error(`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

//Hay tiempos definidos en obtener el usuario y el email por eso es async
const getInfo = async (id) => {
    try {
        //Establece bloqueos hasta que no termine la primera funcion
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} email is ${res.email}`
    } catch (error) {
        console.log(error)
    }
}

getInfo(3).then(res => console.log(res))