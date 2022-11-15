//como nos traemos un modulo en node
const fs = require('fs');

//cuando comenzamos a trabajar con archivos y queremos por ejemplo leer ese archivo
//tener en cuenta: todos estos procesos en file system se van a ejecutar de forma asincrona, aunque tambien tiene una alternativa sincrona, pero no se recomiendan porque puede bloquear el proceso
//vamos a crear funciones sencillas para poder acceder a estas funciones

function leer(ruta, callback){
    fs.readFile(ruta, (err, data)=>{
        console.log(data.toString());
    })
}

function escribir(ruta, contenido, callback){//aqui por ejemplo, modificamos el contenido de nuestro archivo.txt, y si escribimos en la ruta otro archivo eje archivo2.txt lo crea con el contenido que le digamos
    fs.writeFile(ruta, contenido, (err)=>{
        if(err){
            console.error('no he podido escribirlo', err)
        }else{
            console.log('se ha escrito correctamente')
        }
    })
}

function borrar(ruta, callback){//ahora vamos a borrar un archivo
    fs.unlink(ruta, callback);
}

escribir(__dirname+'/archivo.txt', 'soy un archivo nuevo', console.log);
leer(__dirname+ '/archivo.txt', console.log);
borrar(__dirname+'/archivoo.txt', console.log);