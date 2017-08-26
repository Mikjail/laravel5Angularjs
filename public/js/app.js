var app = angular.module('starter', ['ngRoute', 'camburTemplate'])
.constant('API_URL', 'http://localhost:8000/api/');
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/detalles', {
            templateUrl: 'templates/detalles.html' // The ng-template id
        })
        .when('/menu', {
            templateUrl: 'templates/menu.html' // The ng-template id
        })
        .when('/suPedido', {
            templateUrl: 'templates/suPedido.html' // The ng-template id
        })
        .when('/enviar', {
            templateUrl: 'templates/formPedido.html', // The ng-template id
            controller: "formCtrl"
        })
        .when('/finalOrder', {
            templateUrl: 'templates/pedidoEnviado.html'
        })
        .when('/fueraHorario', {
            templateUrl: 'templates/fueraHorario.html'
        })
        .when('/menuExtra', {
            templateUrl: 'templates/menuExtra.html'
        })
        .when('/pedidoEncargo', {
            templateUrl: 'templates/pedidoEncargo.html'
        })
}]);
