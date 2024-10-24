const fs = require('fs'); 
require('colors');

const crearTabla = async (base = 1, print, limit) => {
    try {
        let salida = '';
        
        for (let i = 1; i <= limit ; i++) { 
        salida += `${base} X ${i} = ${base * i} \n`.yellow.italic;  
        };

        if(print){
            console.log('============================='.magenta)
            console.log(`     Tabla del ${base} `.brightRed   )
            console.log('============================='.magenta)
            console.log(salida);
        };
        

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt Creada Con Exito`); 
        //   })    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return (`tabla-${base}.txt `); 

    } catch (error) {
        throw error
    }

}

module.exports = {
    crearTabla 
};
