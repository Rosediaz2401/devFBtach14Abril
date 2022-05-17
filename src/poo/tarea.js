

class Character {
    constructor (animal,nombre,pelicula){
        this.animal = animal,
        this.nombre = nombre
        this.pelicula = pelicula
    }
    getData(){
        return (`Hola soy un ${this.animal}. Mejor conocido como ${this.nombre}`)
    }
    getPeli(){
        return(`Apareci por primera vez en ${this.pelicula}`)
    }
}

const character = new Character ("gato", "Chesire Cat", "Alice in Wonderland")

console.log(character.getData())
console.log(character.getPeli());

class Receta {
    constructor(titulo,porciones,ingredientes,preparacion){
        this.titulo = titulo,
        this.porciones = porciones,
        this.ingredientes = ingredientes,
        this.preparacion =preparacion
    }

    getTitle(){
        return(`${this.titulo}`)
    }
    getPorciones(){
        return(`Porciones: ${this.porciones}`)
    }
}

const ingredientes = {
    "1" : "chile pasilla",
    "2" : "tomate",
    "3" : "cebolla",
    "4" : "ajo",
    "5" : "aceite vegetal",
    "6" : "chocolate",
    "7" : "caldo de pollo"
};

const preparacion = "Coloca agua en los chiles pasilla y colocalos en tu licuadora con los tomates, la cebolla, el ajo asados y una taza del caldo de pollo. Licua hasta que tenga una salsa muy suave. Po a hervir la salsa y agrega la tableta de chocolate. Mezcla todo hasta que se incorpore"

const receta = new Receta ("Mole Poblano", 4, "Ingredientes", "Preparacion")

console.log(receta.getTitle());
console.log(receta.getPorciones());
console.log(ingredientes);
console.log(preparacion);