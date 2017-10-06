module.exports = function () {

        var gModule = {
            rename : require('gulp-rename'),
            uglify : require("gulp-uglify"),
            ngAnnotate : require("gulp-ng-annotate"),
            typeScript : require("gulp-typescript"),
            less : require("gulp-less"),
            cleanCss : require("gulp-clean-css"),
            autoprefixer : require("gulp-autoprefixer"),
            browserSync : require('browser-sync'),
            argv : require('yargs').argv,
            sourcemaps : require('gulp-sourcemaps'),
            concat : require('gulp-concat-sourcemap'),
            inject : require('gulp-inject'),
            templateCache : require('gulp-angular-templatecache'),
            uglifyjs : require('gulp-uglifyjs'),
            addStream : require('add-stream'),
            flatten : require('gulp-flatten'),
            gulpSequence : require('gulp-sequence'),
            clean : require('gulp-clean'),
            zip : require('gulp-zip'),
            $ : require('gulp-load-plugins')({
                lazy: true
            }),
            babel : require('gulp-babel'),
            babelMinify : require("gulp-babel-minify"),
            babelConcat : require("gulp-concat"),
            devOptions : {"target": "es5", "module": "commonjs", "noImplicitAny": false,
            "removeComments": true, "preserveConstEnums": true },
            prodOptions : {"target": "es5", "module": "commonjs", "noImplicitAny": false,
                 "removeComments": true, "preserveConstEnums": true, "out": "tubi.js"},
			prodConfigOptions : {"target": "es5", "module": "commonjs", "noImplicitAny": false,
                 "removeComments": true, "preserveConstEnums": true, "out": "config.js"}				 
        }

        return gModule;
}