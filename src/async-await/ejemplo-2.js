'use strict'

// async -await, nos pemite trabajar respuestas de promesas 'asinronas' con fuciones sincronas
// const getData = () => {
//     return fetch()
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) =>{
//         return data
//     })
// }

// get data esta retornando una promesa
const getData =() => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data)
}
const showData = async () => {
    try {
       const data = await getData()
       console.log(data); 
    } catch (error) {
        console.error(error);
    }
}

showData()


// esta variable esta guardadno un estado porque lo de arriba aun no se ha ejecutado
// const outData = getData()
// console.log(outData);


// const hola =() => {
//     return "hola"
// }

// const saludo = hola()
// console.log(saludo);
