//////////////////////////////////////////////////////
//                   Required Modules               //
//////////////////////////////////////////////////////
var gulp = require("gulp");
var gModule = require("./gulpModules.js")();
var distConfig = require('./distConfig.js')();
var libConfig = require("./gulpconfig.js")();

var PRODVERSION = "v2.1";
console.log("TRBAJANDO SOBRE VERSION:" + PRODVERSION);
//////////////////////////////////////////////////////
//                    HTML-TEMPLATE-CACHE           //
//////////////////////////////////////////////////////
gulp.task('prodHtmlTemplateCache', function(cb) {
    gulp.src(distConfig.htmlTemplates)
        .pipe(gModule.templateCache('camburTemplates.js', {
            standalone: true,
            transformUrl: function(url) {
                return 'templates/' + url;
            },
            module: 'camburTemplate'
        }))
        .pipe(gModule.uglifyjs({
            outSourceMap: true,
        }))
        .pipe(gulp.dest(distConfig.js));
    cb();
});

////////////////////////////////////////////////////
//               CopyingFiles                     //
////////////////////////////////////////////////////

gulp.task('prodCopyFiles:Dist', ['copyCssFiles']);


gulp.task('copyCssFiles', ['copyFontFiles'], function() {
    return gulp.src(distConfig.cssToDist)
        .pipe(gulp.dest(distConfig.css));
})

gulp.task('copyFontFiles', ['copyJsFiles'], function() {
    return gulp.src(distConfig.fontToDist)
        .pipe(gModule.flatten())
        .pipe(gulp.dest(distConfig.fonts));
})

gulp.task('copyJsFiles', ['copyHtmlFiles'], function() {
    return gulp.src(distConfig.jsToDist)
        .pipe(gulp.dest(distConfig.js));
})

gulp.task('copyHtmlFiles', ['copyImgFiles'], function() {
    return gulp.src(distConfig.htmlToDist)
        .pipe(gModule.flatten())
        .pipe(gulp.dest(distConfig.main));
})
gulp.task('copyImgFiles', ['copyPhpFiles'], function() {
    return gulp.src(distConfig.imgToDist)
        .pipe(gulp.dest(distConfig.img));
})
gulp.task('copyPhpFiles', ['otherFiles'], function() {
    return gulp.src(distConfig.backToDist)
        .pipe(gModule.flatten())
        .pipe(gulp.dest(distConfig.back));
})
gulp.task('otherFiles', function() {
    return gulp.src(distConfig.otherFiles)
        .pipe(gulp.dest(distConfig.main));
})

//////////////////////////////////////////////////////
//                    MINIFY                        //
//////////////////////////////////////////////////////
gulp.task('prodMinFiles', ['prodMinFilesMinJS']);
const through = require('through2');

function logFileHelpers() {
    return through.obj((file, enc, cb) => {
        console.log(file.babel.usedHelpers);
        cb(null, file);
    });
}
gulp.task('prodMinFilesMinJS', ['prodMinFilesMinCSS'], function() {
        console.log(distConfig.jsToMinify);
         console.log(distConfig.js);

    return gulp.src(distConfig.jsToMinify)
        // .pipe(gModule.babel({
        //     presets: [require('babel-preset-env')]
        // }))
        // .pipe(gModule.concat('camburPinton'+ PRODVERSION +'.js'))

        .pipe(gModule.babelConcat('camburPinton'+ PRODVERSION +'.js'))
        .pipe(gModule.babelMinify({
            mangle: {
              keepClassName: true
            }
          }))
        .pipe(gulp.dest(distConfig.js));
});
gulp.task('prodMinFilesMinCSS', function() {
    return gulp.src(distConfig.cssToMinify)
        .pipe(gModule.concat(distConfig.css + "camburPinton"+PRODVERSION+".min.css"))
        .pipe(gModule.cleanCss())
        .pipe(gulp.dest("/"));
});

//////////////////////////////////////////////////////
//                     prodHtmlBuilder              //
//////////////////////////////////////////////////////
/**
 *  - Tarea: 'prodHtmlBuilder': Toma el archivo prodFromulario.html que contienen la carpeta 
 *  src/application/BuilderInjection, toma la referencia de los archivos que contiene @config.prodJs 
 *  Realiza un injection dentro del archivo prodFormulario.html
 */

gulp.task('zipdis', ['prodHtmlBuilder'], function(cb) {
    gulp.src(distConfig.main + '**/**')
        .pipe(gModule.zip('archive-Prod.zip'))
        .pipe(gulp.dest('./Versiones'));
    cb();
});
gulp.task('prodHtmlBuilder', ['prodMinFiles'], function() {
    console.log("Injectando y minificando");
    //setTimeout(function() {
    return gulp.src(distConfig.main + 'index.html')
        .pipe(gModule.inject(gulp.src(distConfig.injectionToHtml, { read: false }), { relative: true }))
        .pipe(gulp.dest(distConfig.main));

    //}, 3000);	

});

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
//                                  PRODUCCION                              //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////

/**
 * Copia todos los archivos que necesita produccion.
 */
gulp.task('copyFiles:Dist', gModule.gulpSequence(['styles', 'prodCopyFiles:Dist'], ['prodHtmlTemplateCache']));

/**
 * Minifica archivos .js y realiza una inyección de todos los archivos sobre el .html sobre el html principal
 */
gulp.task('getReady:Dist', ['zipdis']);

/**
 * Inicializa Produccion
 */
gulp.task('serve:dist', function() {

    gModule.browserSync({
        startPath: "",
        server: {
            baseDir: [distConfig.main, distConfig.main + "*.html"]
        },
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
    });
    //gulp.watch(libConfig.lessWatch, ['styles']);
    //gulp.watch(libConfig.tsJsProd, ['prodJsBuilder']);
    //gulp.watch(libConfig.htmls).on('change', gModule.browserSync.reload);
});