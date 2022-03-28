//Un callback es una funcion que se ejecuta a traves de otra funcion
//Los callbacks no son asincronos


//cb es el callback
/* const getUser = (id, cb) => {
    const user = {
        name:'Fernando',
        id:id
    }
    //cb(null, user)
    //cb('User not exist')
    if(id==2) cb('User not exist')
    else cb(null, user)

}
getUser(1, (err, user)=> {
    if(err) return console.log(err)
    console.log(`user name is ${user.name}`)
}) */

const users = [
    {
        id:1,
        name: 'Fernando'
    },
    {
        id:2,
        name: 'Juan'
    },
    {
        id:3,
        name: 'Laura'
    }
]

const emails = [
    {
        id: 1,
        email: 'fersebamorales@gmail.com'
    },
    {
        id: 2,
        email: 'otromail@gmail.com'
    }
]


const getUser = (id, cb) => {
      const user = users.find(user => user.id == id)
      if(!user) cb(`Not exist a user with id ${id}`)
      else cb(null, user)
}

const getEmail = (user, cb) =>{
    const email = emails.find(email => email.id == user.id)
    if(!email) cb(`${user.name} hasnt email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })

}

getUser(3,(err,user)=>{
    if(err) return console.log(err)
    getEmail(user, (err,res) =>{
    if(err) return console.log(err)
    console.log(res)
    })
})