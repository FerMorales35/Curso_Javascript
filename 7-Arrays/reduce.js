//.reduce(callback) - Reduce todos los elementos del array a un unico valor - opera por pares

const numbers = [1,2,3,4,5]
console.log(numbers.reduce((a,b)=>a+b))

const users = [
    {
        name: 'User1',
        online: true
    },
    {
        name: 'User2',
        online: true
    },
    {
        name: 'User3',
        online: false
    },
    {
        name: 'User4',
        online: true
    },
    {
        name: 'User5',
        online: false
    },
    {
        name: 'User5',
        online: true
    }
]

const usersOnline = users.reduce((cont, user)=>{
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conectados`)