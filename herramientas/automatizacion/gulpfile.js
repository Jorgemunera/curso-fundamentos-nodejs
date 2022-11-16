//traemos nuestro paquete
const gulp=require('gulp');
const server= require('gulp-server-livereload')

//para que haya una primera tarea, con task, le damos un nombre "build" y le pasamos la funcion asincrona y tendra 2 parametros, un callback
gulp.task('build', function(cb){
    console.log('construyendo el sitio')
    setTimeout(cb,1200);
})

gulp.task('serve', function(cb){
    gulp.src('www')
        .pipe(server({
            livereload: true, //para que si hay un tipo de cambio en nuestro codigo se actualice inmediatamente
            open: true,// para que automaticamente nos abra el codigo
        }));
})

//si queremos que ejecute tareas en serie, despues nos vamos al pakcage.json para colocar otro script con nuestra nueva tarea default "start": "gulp",
gulp.task('default', gulp.series('build','serve'));