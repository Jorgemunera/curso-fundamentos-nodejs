//importamos el paquete
const moment = require('moment');

//con esto creamos un objeto moment que tiene muchas funciones, ver la fecha, cuanto tiempo ha pasado, cambiar la fecha, trabajar con ella, etc
let ahora = moment();
console.log(ahora.toString());

//formatear la fecha, año,mes,dia separado con una barra
console.log(ahora.format('YYYY/MM/DD - HH:mm'));