function hola(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            //resolve(nombre);
            reject('tenemos problemas')
        }, 1500);
    })
}

function hablar(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    })
}

//
console.log('iniciando el proceso')
hola('Jorge')
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('terminado el proceso');
    })
    .catch(error=>{
        console.error('ha habido un error: ');
        console.error(error);
    });