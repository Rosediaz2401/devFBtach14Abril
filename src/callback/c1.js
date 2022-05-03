'use strict'

// function saludo() {
//     return console.log("hola");
// }
// saludo(cecilia)
// // function anonima = funcion sin nombre (anonymus function)
// // funcion con una => es una funcion de flecha (arrow function)

// const saludos =() => {
//     return console.log("hola")
// }

// const saludo = () => console.log('hola')


// // forma simple de arrow function
// const saludo = nombre => console.log('hola' + nombre)


function suma(num1,num2) {
    return num1+num2 
}

// funcion de orden superior = funcion (otra funcion)
function calculadora(num1,num2,computo) {
// callback = funcion de orden superior que invoca 
    return computo(num1,num2)
}

calculadora(98,16,suma)


function resta(valor1,valor2){
    return valor1-valor2
}

console.log(calculadora(100,50,resta))

function multiplica(num1,num2){
    return num1 * num2
}

console.log(calculadora(9,6,multiplica))

function divide(num1,num2){
    return num1 / num2
}

console.log(calculadora(30,3,divide))