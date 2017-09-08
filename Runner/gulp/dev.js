//////////////////////////////////////////////////////
//                   Required Modules               //
//////////////////////////////////////////////////////
var gulp = require("gulp");
var gModule = require("./gulpModules.js")();
var devConfig = require('./devConfig.js')();

//////////////////////////////////////////////////////
//                     devJsBuilder                 //
//////////////////////////////////////////////////////
/**
 *  - Tarea: 'devJsBuilder'  Toma todos archivos contenidos en @devConfig.tsJsDev,inicializa sourcemap 
 * (Indica que sourcemap será generado), crea los archivos js correspondientes a todos los ts contenidos 
 * en @onfig.tsJsDev y mueve todo lo que se realizó del sourcemap a la carpeta src/js/application/maps crea 
 * o sobreescribe todos los archivos js generados en las carpetas correspondientes.
 * */

gulp.task('devJsBuilder', function(cb) {
    gulp.src(devConfig.typings)
        .pipe(gModule.sourcemaps.init()) // This means sourcemaps will be generated 
        .pipe(gModule.typeScript(gModule.devOptions))
        .pipe(gModule.sourcemaps.write("maps")) // Now the sourcemaps are added to the .js file 
        .pipe(gulp.dest(devConfig.jsfolder))
    cb();
});


//////////////////////////////////////////////////////
//                    devdHtmlBuilder               //
//////////////////////////////////////////////////////
/**
 * 'devHtmlBuilder': Toma el archivo .html en la carpeta BuilderInjection ,
 * realiza un injection de las referencias JS y CSS contenidas en la variable @config.devInjectio y luego
 * envía el archivo en la carpeta contenida en @config.serve.base (..src/main/webapp/)
 *@Read : False -> Sirve para que no lea el archivo cuando lo consigue. (Ahorrar tiempo)
 *@Relative : True -> sirve para pasarle una ref relativa al archivo.
 */
console.log(devConfig.serve.base);
console.log(devConfig.serve.index);
gulp.task('devHtmlBuilder', function() {
    return gulp.src(devConfig.serve.index)
        .pipe(gModule.inject(gulp.src(devConfig.devInjection, { read: false })))
        .pipe(gulp.dest(devConfig.serve.base));
});



//////////////////////////////////////////////////////////////////////////////
//                                                                          //
//                              DESARROLLO                                  //
//                                                                          //
//  2. DEV Html Builder: Crea el archivo Html y le realiza injection de src //                                                                     //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
/**
 * Copia todos los archivos que necesita produccion.
 */
gulp.task('serve:dev', ['styles', 'devJsBuilder', 'devHtmlBuilder'], function() {
    gulp.watch(devConfig.lessWatch, ['styles', gModule.browserSync.reload]);
    gModule.browserSync({
        startPath: "",
        server: {
            baseDir: [devConfig.serve.base]
        },
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
    });
    gulp.watch(devConfig.jsWatch).on('change', gModule.browserSync.reload);
    gulp.watch(devConfig.htmls).on('change', gModule.browserSync.reload);
});