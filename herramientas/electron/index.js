//traemos el paquete
//el paquete de electron exporta un objeto con muchas opciones, en este caso vamos a coger dos
const { app, BrowserWindow } = require('electron');

//vamos a tener una ventana principal donde se va a ver la aplicacion
let ventanaPrincipal;

//escuchar el evento para cuando este listo
app.on('ready', crearVentana())

function crearVentana(){
    ventanaPrincipal=new BrowserWindow({
        width: 800,
        height: 600,
    });

    //para que nuestra aplicacion este en esta ventana
    ventanaPrincipal.loadFile('index.html');
}

//despues deberemos ejecutar desde electron, asi que creamos un script en nuestro package.json "start":"electron ." y ahora si en terminal ejecutamos npm start