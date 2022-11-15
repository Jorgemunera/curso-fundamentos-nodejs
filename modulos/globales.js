let i=0;
let intervalo = setInterval(function(){
    console.log('hola');
    if(i===3){
        clearInterval(intervalo);
    }
    i++; 
},1000);

setImmediate(function(){
    console.log('holiguis')
});

//definiendo variables globales, no es muy recomendable hacerlo asi
globalThis.miVariable='elValor'
console.log(miVariable);

//el objeto global
//console.log(global)

//la informacion del proceso
//console.log(process)