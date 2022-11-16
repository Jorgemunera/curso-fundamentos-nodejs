//vamos a crear un buffer
//con los buffer podemos trabajar con los datos en la version mas cruda que podemos tener, son solo datos que vienen y van
//podemos tambien trabajar con el buffer posicion a posicion

//le vamos a decir que de 4 bytes de informacion
let buffer= Buffer.alloc(4)

//esto nos mostrara un buffer vacio
console.log(buffer);

//vamos a pasarle un array con datos
let buffer2=Buffer.from([1,2,3]);
console.log(buffer2);

//vamos a guardar texto mas complejo
let buffer3=Buffer.from('Hola');
console.log(buffer3);

//vamos a ver como hacemos un abecedario con buffers, para esto creamos el buffer del tamaño adecuado, 26 caracteres y haremos un ciclo para colocar la informacion, tener en cuenta que para movernos en la posicion de un buffer es lo mismo como si fuera un array

let abc=Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i]= i + 97;//97 es la posicion en el codigo ASCCI
}

console.log(abc);
console.log(abc.toString());