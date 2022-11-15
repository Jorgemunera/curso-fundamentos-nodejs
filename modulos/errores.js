function otraFuncion(){
    seRompe();
}

function seRompe(){
    return 3+z;
}
//cada vez que sepamos que una funcion puede romperse y puede tener error, la metemos en un try catch, de esta manera la aplicacion sigue ejecutandose y no se dispara el error que me la frena

try{
    otraFuncion();
} catch(err){
    console.error('vaya algo se ha roto');
    console.error(err.message);//aqui podemos ver cual es el error, pero especificamente el mensaje, no todo el texto que se dispara cuando cae un error
    console.log('Pero tranquilo, lo hemos capturado y seguimos');
}

console.log('esto de aqui continua funcionando');

//-------------------------------
//vamos a ver que pasa con una funcion asincrona
function seRompeAsincrona(callback){
    setTimeout(function(){//aqui debemos tener en cuenta que hay una funcion interna que no esta ya en el hilo principal, por tanto hay que meterla en un try catch tambien para preveer el error
        try{
            return 3+z;
        }catch(err){
            console.error('error de la funcion asincrona')
            callback(err);
        }
    })
}

try{
    seRompeAsincrona(function(){
        console.log('hay error')
    });
}catch(err){
    console.error('vaya algo se ha roto2');
    console.error(err.message);
    console.log('Pero tranquilo, lo hemos capturado y seguimos2');
}