//lo primero es importar el modulo, pero esto no es necesario porque process viene dentro de los modulos globales de node, asi que no es necesario require nuestro process.
//const p=require('process');

//si queremos hacer algo antes
process.on('beforeExit',()=>{
    console.log('el proceso va a terminar');
})

//detectar cuando vaya a salir el programa, una vez ejecutado el exit nos hemos desconectado completamente del event loop lo que quiere decir que si tuvieramos algo asincrono que funcione despues de eso nunca pasará, si estuviera afuera, si se veria
process.on('exit',()=>{
    console.log('el proceso acabo');
    setTimeout(()=>{
        console.log('esto no se va a ver nunca')
    },0)
})
setTimeout(()=>{
    console.log('esto si se va a ver')
},0)

//escuchar cuando hay una excepcion que no se ha capturado(no hay try catch etc), esta tiene prioridad a la hora de ejecutarse sobre el resto
process.on('uncaughtException',(err, origen)=>{
    console.error('vaya, se nos olvido capturar un error');
    console.error(err);
    console.error(err.message);
})

functionQueNoExiste();
//promesas que se han rechazado y que no hay un catch
// process.on('uncaughtRejection',()=>{
//     console.log('el proceso acabo');
// })