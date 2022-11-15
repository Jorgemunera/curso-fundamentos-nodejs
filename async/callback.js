function hola(nombre,miCallback){
    setTimeout(function(){
        console.log('Hola, '+nombre);
        miCallback(nombre);
    }, 1500)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios, '+nombre);
        otroCallback();
    }, 1000 )
}

console.log('iniciando proceso');
hola('Jorge',function(nombre){
    adios(nombre, function(){
        console.log('terminando proceso');
    })
});

// hola('Jorge', function(){});
// adios('Jorge', function(){});

