//lo primero es importar el paquete
const bcrypt = require('bcrypt');

//cuando tenemos una contraseña, lo normal es que nunca este en texto plano sino cifrada, y lo que queremos entonces es cifrar esta contraseña
const password = '1234Segura!'

//vamos a utilizar bcrypt, hash recibira 3 parametros, el primero la contraseña, el segundo el numero de rondas que va a dar para crear el hash, un hash es aplicar un algoritmo para poder cambiar el texto por una cadena de caracteres x, y una funcion que recibe 2 parametros, el err y el hash, que sera el codigo creado
bcrypt.hash(password, 5, function(err, hash){
    console.log(hash);

    //como podemos comprobar que este hash de verdad sea el password, para esto utilizamos otra funcion de bcrypt que se llama compare
    bcrypt.compare(password, hash, function(err, res){
        console.log(res);
    })
});