'use strict'

// const infor ={
//     valor: 'La info',
//     unaF:() =>{
//         console.log('Importando co common JS')
//     }
// };

// module.exports.info = info;

// module.exports={
//     "usuarioAsinc": "usuarioAsinc",
//     "usuarioSinc": "usuarioSinc"
// }

module.exports = {
    usuarioSinc(id) {
      const tiempoInicio = new Date().getTime();
      console.log('JEJEJE ', 5 + id);
      while ((new Date().getTime() - tiempoInicio) <= 3000) {
        // Esperando
      }
  
      return {
        "id": id,
        "nombre": `Usuario ${id}`
      }
    },
  
    usuarioAsinc(id, callback) {
      const usuario = {
        "id": id,
        "nombre": `Usuario ${id}`
      }
  
      console.log('JAJAAJ ', 5+id);
      setTimeout(() => {
        callback(usuario)
      }, 3000);
    },
  }


    // usuarios(){
    //     console.log('jejeje');
    // },
    // ciclo: 'Datos de ciclo'

    // ciclo:() => { for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }}