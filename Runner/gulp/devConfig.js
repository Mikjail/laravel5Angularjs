var ambiente = require('../config.ambiente')();
module.exports = function() {
    var mainappbase = ambiente.path;
    var css = mainappbase + 'css/';
    var fonts = mainappbase + 'fonts/';
    var js = mainappbase + 'js/';
    var less = mainappbase + 'less/';
    var types = mainappbase + 'types/';

    var config = {

        cssfolder: css,
        fontfolder: fonts,
        jsfolder: js,
        tsfolder: types,

        serve: {
            base: mainappbase,
            index: mainappbase + "index.html"
        },
        cssdependencies: [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/components-font-awesome/css/font-awesome.css'
        ],
        jsdependencies: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jquery.easing/js/jquery.easing.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-cookies/angular-cookies.min.js',
            'bower_components/angular-resource/angular-resource.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-ui-mask/dist/mask.min.js',
            'bower_components/jquery_lazyload/jquery.lazyload.js'
        ],
        fontsdependencies: [
            'bower_components/bootstrap/fonts/*.*',
            'bower_components/components-font-awesome/fonts/*.*'
        ],
        less: [
            less + '*.less'
        ],
        lessWatch: [
            less + '*.less'
        ],
        jsWatch: [
            js + "*/*.js",
            js + "*.js"
        ],
        typings: [
            types + '*.ts'
        ],
        htmls: [
            mainappbase + '*.html',
            mainappbase + '**/*.html',
            mainappbase + '**/**/*.html'
        ],
        devInjection: [
            mainappbase + 'js/scroll.js'
        ],
        htmlTemplates: [
            mainappbase + "section/*.html",
            mainappbase + "section/**/*.html",
            mainappbase + "section/**/**/*.html"
        ],
        jsToMinify: [
            mainappbase + 'dist/js/tubi.*.js'
        ],
        cssToMinify: [
            mainappbase + 'dist/css/tubi.css'
        ]
    };
    return config;
};