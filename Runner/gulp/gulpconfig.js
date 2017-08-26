var ambiente = require('../config.ambiente')();
module.exports = function() {

    var less = ambiente.path + 'less/';
    var css = ambiente.path + 'css/';
    var types = ambiente.path + 'typings/application/';

    var dependencies = {

        css: css,
        types: [
            types + '*.ts',
            types + '**/*.ts',
            types + '**/**/*.ts',
            '!' + types + 'config/*.ts'
        ],

        cssdependencies: [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/font-awesome/css/font-awesome.css'
        ],
        jsdependencies: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-ui-mask/dist/mask.js',
            'bower_components/jquery_lazyload/jquery.lazyload.js'
        ],
        fontsdependencies: [
            'bower_components/bootstrap/fonts/**/*.*',
            'bower_components/font-awesome/fonts/**/*.*'
        ],
        less: [
            less + 'tubi.less',
            less + 'channel.*.less'
        ],
        lessWatch: [
            less + '**.less',
            less + '*.*.less',
            less + '*/*.less'
        ],
        htmls: [
            ambiente.path + '*.html',
            ambiente.path + '**/*.html',
            ambiente.path + '**/**/*.html'
        ]

    };
    return dependencies;
}