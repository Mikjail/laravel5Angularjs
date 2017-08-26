var gulp = require("gulp");
var gModule = require("./gulpModules.js")();
var config = require('./devConfig')();
//////////////////////////////////////////////////////
//                   Dependencies                   //
//////////////////////////////////////////////////////
gulp.task('cssdependencies', function() {
    return gulp.src(config.cssdependencies)
        .pipe(gModule.concat('lib.css'))
        .pipe(gModule.cleanCss())
        .pipe(gulp.dest(config.cssfolder));
});
gulp.task('jsdependencies', function() {
    return gulp.src(config.jsdependencies)
        .pipe(gModule.concat('lib.min.js'))
        .pipe(gulp.dest(config.jsfolder));
});
gulp.task('fontsdependencies', function() {
    return gulp
        .src(config.fontsdependencies)
        .pipe(gulp.dest(config.fontfolder));
});
gulp.task('installdeps', ['cssdependencies', 'jsdependencies', 'fontsdependencies']);