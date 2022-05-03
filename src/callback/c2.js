'use strict'


function saludar(){
    console.log('hola mundo');
}

// comportamiento de un callback
function ejecutarFuncion(otrafuncion){
    return otrafuncion()
}

ejecutarFuncion(saludar)

function saludos(){
    console.log('rose');
}

// comportamiento de un callback
function nombre(dameNombre){
    return dameNombre()
}

saludos(nombre)

// crear una funcion que salude al nombre que le paso como parametro
// todas las funciones sean arrow function
// para ejecutar js, hacerlo con un script del package.json
const saludo = (nombres) => console.log("Hola "+nombres);

const ejecutarSaludo= (saludo,nombres) => saludo(nombres)
 
ejecutarSaludo(saludo, "Rose")
