'use strict'

fetch('https://rickandmortyapi.com/api/character')
.then (response => response.json())
.then(data => {
        console.log('Retorno:', data);
}) .catch(error => {
    console.log('error',error);
})

// const arreglo = [
//     {
//         nombre: 'Daniel',
//         apellido: 'Silverio'
//     }
// ]

// console.log(arreglo[0].apellido)