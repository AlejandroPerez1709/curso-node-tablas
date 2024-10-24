const {crearTabla} = require('./helpers/multiplicar')
const argv  = require('./config/yargs');



console.clear()


// console.log(argv);
// console.log('argv.base: ',argv.base);
// console.log('argv.listar: ',argv.listar);


crearTabla(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo + 'Creado con Exito'))
  .catch(err => console.log(err));

//***********************Antes de Yargs */
// let base = 8;
// const [ , , arg3 = 'base=1'] = process.argv;
// const [ , base = '1'] = arg3.split('=');

// console.log(process.argv);
// console.log('Argumento: ' + arg3);
// console.log('Valor: ' + base);


// crearTabla(base)
//   .then(nombreArchivo => console.log(nombreArchivo + 'Creado con Exito'))
//   .catch(err => console.log(err));






