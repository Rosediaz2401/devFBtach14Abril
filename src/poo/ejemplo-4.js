'use strict'

const promesa = new Promise ((resolve, reject) => {
    if(true){
        resolve('Resuelta')
    } else {
        reject('Rechazada')
    }
})

promesa
    .then((response) => {console.log(response)}) 
    .then(() => {console.log('hola')})
    .then(() => {
        console.log('Mundo')
        return {"nombre" : 'Samantha'}
    })
    .then((respuesta) => {
        console.log(respuesta + "Diaz")
    })
    .catch((error) => { console.log(error)})