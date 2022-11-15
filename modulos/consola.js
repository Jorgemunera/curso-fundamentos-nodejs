console.log('algo');
console.info('algo2');
console.error('error');
console.warn('warn');

var tabla =[
    {a: 1, b: 'z'},
    {a: 2, b: 'otra'}
]
console.log(tabla);
console.table(tabla);//nos muestra datos en forma de tablas

console.group('conversacion');
console.log('hola');
console.log('bla bla bla');
console.log('adios');
console.groupEnd('conversacion')//nos permite agrupar un monton de logs para decir que forman parte de algo, y mostrarlos con identacion distinta
console.log('otra cosa de otra funcion');

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');