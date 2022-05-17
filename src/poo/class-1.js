'use strict'

class Animal{
    constructor(color, sonido, especie){
        //atributos
        this.especie = especie,
        this.color = color,
        this.sonido = sonido
    }

    //metodos
    emitirSonido() {
        return console.log( `emitiendo sonido: ${this.sonido}`);
    }
}

class Jirafa extends Animal{
    constructor(nombre, color, sonido, tam){
        super(nombre,color,sonido)
        this.tam = tam
    }
}

let yiraf = new Jirafa("yiraf","blanca", "brrr","4m")

console.log(yiraf)

//instanciar una clase, para crear un objeto
// el objeto ya es especifico
// para acceder se hace con el punto
let gato = new Animal("rojo", "miau", "gato");
let perro = new Animal("cafe", "guau", "perro")
let vaca = new Animal("pinta", "mu!", "vaca")


//acceder a las propiedades y metodos, lo hacemos con la notacion de punto
console.log(gato);
console.log(gato.color)
console.log(gato.sonido)
gato.emitirSonido();
vaca.emitirSonido();



