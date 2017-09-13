var ambiente = require('../config.ambiente')();
module.exports = function() {

    var mainDist = ambiente.prod;
    var css = mainDist + 'css/';
    var js = mainDist + 'js/';
    var fonts = mainDist + 'fonts/';
    var img = mainDist + 'img/';
    var back = mainDist + 'back/';

    var dist = {

        main: mainDist,
        css: css,
        js: js,
        fonts: fonts,
        img: img,
        back: back,
        configJsDist: mainDist + "js/",

        cssToDist: [
            ambiente.path + 'css/*.css',
        ],
        fontToDist: [
            ambiente.path + 'fonts/*.*',
        ],
        htmlToDist: [
            ambiente.path + 'index.html'
        ],
        jsToDist: [
            ambiente.path + 'js/lib.min.js',
            ambiente.path + 'js/scroll.js',
            ambiente.path + 'js/app.js',
            ambiente.path + 'js/controllers/controller.js',
            ambiente.path + 'js/service.js',
            ambiente.path + 'js/directives/directives.js'

        ],
        imgToDist: [
            ambiente.path + 'img/*.*',
            ambiente.path + 'img/**/.*',
            ambiente.path + 'img/**/**.*',
            ambiente.path + 'img/**/**/**.*',

        ],
        backToDist: [
            ambiente.path + 'back/*.php'
        ],
        htmlTemplates: [
            ambiente.path + "templates/*.html"
        ],
        jsToMinify: [
            mainDist + 'js/scroll.js',
            mainDist + 'js/app.js',
            mainDist + 'js/service.js',
            mainDist + 'js/controller.js',
            mainDist + 'js/directives.js',
            mainDist + 'js/camburTemplates.js'
        ],
        otherFiles: [
            ambiente.path + 'sitemap.xml',
            ambiente.path + 'favicon.ico',
            ambiente.path + 'google*.html'
        ],
        cssToMinify: [
            css + 'camburPinton.css'
        ],
        injectionToHtml: [
            //ambiente.path+ "dist/js/tubi.*.js",
            css + 'lib.css',
            css + 'camburPinton.min.css',
            js + 'lib.min.js',
            js + 'camburPinton.*.min.js',
        ]

    };

    return dist;
}