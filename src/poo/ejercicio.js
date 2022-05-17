
class Animal {
    constructor(altura, caracteristica,nombre){
        this.altura = altura,
        this.caracteristica = caracteristica,
        this.nombre = nombre
    }
         emiteAccion() {
            console.log(`mi superpoder es ${this.caracteristica}`)
    }
}

let animal = new Animal("2m","vuela","golondrina")


class Humano extends Animal{
    constructor(altura,caracteristica,nombre,patas) {
    super(altura,caracteristica,nombre)
    this.patas = patas
}
}

let humano = new Humano ("2m","humano","kike","2")


console.log(animal)
console.log(humano)
animal.emiteAccion()
