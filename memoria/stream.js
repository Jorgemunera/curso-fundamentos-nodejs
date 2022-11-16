const fs=require('fs');
const stream=require('stream');
const util=require('util')

let data='';

//vamos a crear un readablestream
let readableStream=fs.createReadStream(__dirname+'/input.txt');

//como sabemos el tipo de datos que recibimos, con setEncoding podemos decirle esto y no lo convertira
readableStream.setEncoding('utf-8');
//vamos a recibir un stream de datos, a cada paquete de datos se le llama chunk
readableStream.on('data', function(chunk){
    //console.log(chunk);
    //si tuvieramos un archivo enorme, añadimos a data, pero como sabemos cuando termina?
    data +=chunk;
});

//diciendo end aqui sabemos que ya ha terminado
//importante entre solamente ver el chunk o irlo guardando en datas, la vamos a tener cuando se manejen archivos mas grandes, por tanto en cosas muy pequeñas no tiene sentido utilizar un stream, pero en grandes si, como ejemplo, viene una peticion http que no sabbemos que grande o pequeña es, videos grandes, etc, y nos sirve porque vamos guardando por paquetes
readableStream.on('end', function(){
    console.log(data);
});

//------------------------
//vamos a crear un stream de escritura
//aqui lo que vamos a hacer es escribir es en el buffer de la salida del sistema, stdout ya es un buffer de escritura
process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal');

//-------------------------------------------
//si tenemos buffer de escritura y lectura, coimo podemos hacer para crear un buffer intermedio para que reciba el dato lo modifique y lo escriba, vamos a crear un buffer de transformacion, primero tenemos que tener el paquete traido al inicio de este documento

//esto nos crea un stream que al mismo tiempo puede leer y escribir, y vamos hacer la transformacion a mayusculas
const Transform=stream.Transform;

function Mayus(){
    Transform.call(this);//vamos a crear un constructor para este transform
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform= function(chunk, codif, cb){
    chunkMayus=chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus= new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);