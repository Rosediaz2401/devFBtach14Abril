'use strict'

// const datos =require('./usuarios')

// const functionC = datos.info.unaF;


// functionC();

// const { usuarioSinc} = require('./usuarios')

// console.log('usuarioSinc',usuarioSinc);

// import { usuarioSinc,ciclo } from "./usuarios"

// console.log('usuarioSinc');

'use strict'

const { usuarioSinc } = require('./usuarios');

console.log('Inicio del programa');
console.time('inicio');

console.log(usuarioSinc(1));
console.log(usuarioSinc(2));
console.log(usuarioSinc(3));

console.timeEnd('inicio');
console.log('Fin del programa');