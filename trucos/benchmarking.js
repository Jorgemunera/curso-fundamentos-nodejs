console.time('todo');
let suma1=0;
console.time('bucle 1');
//al ejecutar con nodemos este ciclo tan grande, vemos que comienza a tardar mas para el clean exit o terminar de ejecutar. ahora bien, hay una forma para saber cuanto tiempo tarda algo y es con uno de los metodos de consola y vemos el tiempo real en que tarda en ejecutar un bloque de codigo. asi si queremos saber cuanto tarda todo nuestro codigo en correr lo encerramos en un console.time
for (let i = 0; i < 1000000; i++) {
    suma1 +=1;
}
console.timeEnd('bucle 1');

let suma2=0;
console.time('bucle 2');
for (let j = 0; j < 100000000; j++) {
    suma2 +=1;
}
console.timeEnd('bucle 2');


let suma3=0;
console.time('bucle 3');
for (let k = 0; k < 10000000000; k++) {
    suma3 +=1;
}
console.timeEnd('bucle 3');

console.time('asincrono');
console.log('empieza proceso asincrono')
asincrona()
    .then(()=>{
        console.timeEnd('asincrono')
    });

console.timeEnd('todo');

//vamos a ver si funciona con funciones asincronas
function asincrona(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('termina el proceso asincrono');
            resolve();
        })
    })
}
