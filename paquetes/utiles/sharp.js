//importamos la libreria o paquete
const sharp= require('sharp');

//le damos la imagen que queremos manejar, y vamos a hacerlo pequeño, y luego convertir a archivo con nombre resize.png
//tambien tiene mas funciones, como pasarlo a blanco y negro
sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resize.png');