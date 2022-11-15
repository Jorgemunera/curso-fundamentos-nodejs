//lo primero es traer el modulo os
const os= require('os');

//vamos a ver la arquitectura que tenemos en nuestra maquina
console.log(os.arch());
console.log(os.platform());

//procesadores en mi pc
console.log(os.cpus());

//las constantes en nuestro pc
console.log(os.constants);

//la capacidad libre de memoria RAM
const SIZE=1024;
function kb(bytes){return bytes/SIZE}
function mb(bytes){return kb(bytes)/SIZE}
function gb(bytes){return mb(bytes)/SIZE}
console.log(os.freemem());
console.log(gb(os.freemem()));

//capacidad de memoria disponible
console.log(gb(os.totalmem()));

//cual es el directorio raiz
console.log(os.homedir());

//directorio de archivos temporales
console.log(os.tmpdir());

//vamos a saber cual es el hostname o si trabajamos con microservicios para poderlo luego exportar
console.log(os.hostname());

//la interfaz de red activas en mi pc
console.log(os.networkInterfaces());