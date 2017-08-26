var gulp = require("gulp");
var gModule = require("./gulp/gulpModules.js")();
var config = require("./gulp/devConfig.js")();
//Todas las versiones tienen que tener el .0 
//sino no va a funcionar correctamente el INJECT

////////////////////////////////////////////////////////
//                       LESS                         // 
////////////////////////////////////////////////////////
gulp.task('styles', function() {
    return gulp
        .src(config.less)
        .pipe(gModule.$.plumber())
        .pipe(gModule.$.less())
        .pipe(gModule.$.autoprefixer({
            browsers: ['last 2 version', '> 5%']
        }))
        .pipe(gulp.dest(config.cssfolder))
        .pipe(gModule.browserSync.stream());
});

//////////////////////////////////////////////////////
//                      RUNJAVA                     //
//////////////////////////////////////////////////////
gulp.task('startjava', function() {
    require('child_process').exec(' C:/java/Liberty/bin/server.bat start defaultServer', function(error, stdout, stderr) {
        if (error) {
            console.log(error);
            return console.log(error);
        }
        console.log(stdout);
    });
});

gulp.task('stopjava', function() {
    require('child_process').exec(' C:/java/Liberty/bin/server.bat stop defaultServer', function(error, stdout, stderr) {
        if (error) {
            console.log(error);
            return console.log(error);
        }
        console.log(stdout);
    });
});



//////////////////////////////////////////////////////
//                      WATCHERS                    //
//////////////////////////////////////////////////////
gulp.task('less-watcher', function() {
    gulp.watch(config.lessWatch, ['styles']);
});
gulp.task('type-watcher', function() {
    gulp.watch(config.types, ['devJsBuilder']);
});

//////////////////////////////////////////////////////
//                      Help                        //
//////////////////////////////////////////////////////
gulp.task('help', function() { gModule.$.taskListing(); });
gulp.task('default', ['help']);

//////////////////////////////////////////////////////
//                    DEV and PROD                  //
//////////////////////////////////////////////////////

var requireDir = require('require-dir');
requireDir('./gulp');