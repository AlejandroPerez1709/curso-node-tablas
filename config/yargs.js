const argv = require('yargs')
    .option('b', {
    alias: 'base',
    type:'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
    alias: 'listar',
    default: false,
    type: 'boolean',
    demandOption: false,
    describe: 'Lista la tabla solicitada en consola'
    })
    .option('h', {
        alias: 'hasta',
        default: 10,
        type: 'number',
        demandOption: false,
        describe: 'Es el limite de la tabla de multiplicar'
    })
    .check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número'
    };
    return true;
    })
    .argv;

module.exports = argv;