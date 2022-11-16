function asincrona(callback){
    setTimeout(function(){
        try{
            let a=3+z;
            callback(null, a);
        }catch(err){
            callback(err);
        }
    },1000);
}

asincrona(function(err,dato){
    if(err){
        console.error('tenemos el error');
        console.error(err);
        return false;
        //throw err: NO FUNCIONA EN FUNCIONES ASINCRONAS
    }
    console.log('todo va bien, mi data es: ', dato);
})

