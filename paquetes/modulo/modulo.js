//si no se exporta nada, no se puede importar nada

function saludar(){
    console.log('hola mundo')
}

module.exports={
    saludar,
    prop1:'hola que tal'
};