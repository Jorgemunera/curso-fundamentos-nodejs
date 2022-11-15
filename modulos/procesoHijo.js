//node.js puede, ademas de ejecutar sus propios procesos, ejecutar otros procesos en el sistema, correr procesos hijo. Cuando ejecutamos cualquier cosa asincrona crea un hilo donde corre cosas, pues ademas de esos hilos podemos trabajar con procesos.
//un proceso es algo que se ejecuta y se termina, asi podemos levantar otros procesos con node, con python, con scripts,etc. para esto hay una libreria interna dentro del core que se llama child process

const {exec,spawn}=require('child_process');//vamos a traer exec del proceso hijo, aqui estaremos exportando un objeto (child_process) que tiene un monton de objetos dentro, pero que en este caso solo queremos excec

//con esto vamos a poder ejecutar cualquier comando en una terminal, colocamos el comando, nuestro callback como segundo parametro, este a su vez recibe como parametros, el error, la salida principal estandar y el estandar error
exec('ls -la', (err, stdout, sterr)=>{
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
})

//ahora vamos a hacer que un proceso hijo ejecute un proceso de node con una clase anterior
exec('node modulos/consola.js', (err, stdout, sterr)=>{
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
})

//pero si queremos algo mas complejo que solo ejecutar un comando, porque queremos un proceso nuevo y ver que pasa con ese proceso, utilizamos entonces SPAWN, para traerlo hacemos
let proceso = spawn('ls', ['-la']);

//para saber si lo ha spawneado
//console.log(proceso);
//podemos acceder al id del proceso
console.log(proceso.pid);
//podemos saber si el proceso esta conectado
console.log(proceso.connected)

//vamos a ver que node esta orientado a eventos y vemos que stdout fue lo que hicimos arriba para ejecutar el comando ls-la
proceso.stdout.on('data', function(dato){
    console.log(dato.toString());
})

//podemos tambien detectar cuando se termina el proceso
proceso.on('exit', function(){
    console.log('el proceso termino')
})