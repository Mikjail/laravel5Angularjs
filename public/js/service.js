ProductosService.$inject = ['$http'];
ProductsService.$inject = ['$http', 'API_URL','$q'];
angular.module('starter')
    .factory('ProductosService', ProductosService)
    .service('ProductsService',ProductsService);

function ProductsService($http, API_URL, $q){
    var def= $q.defer();
    this.getProducts = function(){ 
    $http.get(API_URL + "products")
      .then(function(response) {
            def.resolve(response);
       
      });
      return def.promise;
  }
   
}


function parseResponse(response){
    if(typeof response.value.data != 'undefined' && response.value.data != null){
        return response.value.data;
    }
    else{
        alert("No existen datos al servicio que llama");
    }

}


function ProductosService($http) {

    return {
        Slide1: [{
                id: 1,
                "nombre": "Palta con Pollo",
                "descripcion": "La Reina Pepeada!",
                "ingredientes": ["Palta", "Pollo", "Mayonesa"],
                "infoLogo": "img/icon/info/btnInfoAmarillo.png",
                "img": "img/arepas/ReinaPepiada.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizAmarillo.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoAmarillo.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "total": 0
            }, {
                id: 2,
                "nombre": "Carne Mechada",
                "descripcion": "Vacio bien picante!",
                "ingredientes": ["Vacio", "Picadillo"],
                "infoLogo": "img/icon/info/btnInfoAzul.png",
                "img": "img/arepas/Mechada.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizAzul.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoAzul.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 3,
                "nombre": "Poroto y Queso",
                "descripcion": "Domino!",
                "ingredientes": ["Poroto Negro", "Queso Rallado"],
                "infoLogo": "img/icon/info/btnInfoVioleta.png",
                "img": "img/arepas/domino.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizVioleta.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoVioleta.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            }, {
                id: 4,
                "nombre": "Perico",
                "descripcion": "Huevo revuelto!",
                "ingredientes": ["Huevo", "Tomate", "Cebolla"],
                "infoLogo": "img/icon/info/btnInfoNaranja.png",
                "img": "img/arepas/Perico.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizNaranja.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoNaranja.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 5,
                "nombre": "Jamon, queso, huevo",
                "descripcion": "Bien Argentina!",
                "ingredientes": ["Jamon", "Queso", "Huevo"],
                "infoLogo": "img/icon/info/btnInfoRojo.png",
                "img": "img/arepas/JamonyQueso.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizRojo.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoRojo.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0,
            }
        ],
        Slide2: [{

                id: 6,
                "nombre": "Pernil de cerdo",
                "descripcion": "Tremendo Pernil!",
                "ingredientes": ["Carne de Cerdo"],
                "infoLogo": "img/icon/info/btnInfoAmarillo.png",
                "img": "img/arepas/arepab1.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizRojo.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 7,
                "nombre": "Queso Sardo",
                "descripcion": "Queso Rallado!",
                "ingredientes": ["Solo Queso Rallado"],
                "infoLogo": "img/icon/info/btnInfoAmarillo.png",
                "img": "img/arepas/arepab1.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizRojo.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoAmarillo.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 8,
                "nombre": "Capresse",
                "descripcion": "La Italiana!",
                "ingredientes": ["Muzzaella", "Tomate", "Albahaca"],
                "infoLogo": "img/icon/info/btnInfoAmarillo.png",
                "img": "img/arepas/JamonQueso.png",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizRojo.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoAmarillo.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 9,
                "nombre": "Queso y Jamon Crudo",
                "descripcion": "Cumple con las 3 B: 'Buenas, Bonitas y Baratas'",
                "ingredientes": ["Queso Sardo", "Jamon Crudo"],
                "infoLogo": "img/icon/info/btnInfoAmarillo.png",
                "img": "img/arepas/arepab1.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizRojo.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoAmarillo.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 10,
                "nombre": "Dulce de Leche",
                "descripcion": "Con mate va como piña!",
                "ingredientes": ["Dulce de Leche Serenisima"],
                "infoLogo": "img/icon/info/btnInfoAmarillo.png",
                "img": "img/arepas/arepab1.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizRojo.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoAmarillo.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 11,
                "nombre": "Vegetales Salteados",
                "descripcion": "La Veggie!",
                "ingredientes": ["Zanahoria Cocida", "Cebolla caramelizada", "Morron", "Coliflor", "Brocoli"],
                "infoLogo": "img/icon/info/btnInfoAmarillo.png",
                "img": "img/arepas/arepab1.jpg",
                "btnMaiz": "img/icon/trigoMaiz/btnMaizRojo.png",
                "btnTrigo": "img/icon/trigoMaiz/btnTrigoAmarillo.png",
                "precio": 75,
                "cantidadTrigo": 0,
                "cantidadMaiz": 0,
                "cantidad": 0,
                "total": 0
            }
        ],
        Slide3: [{
                id: 12,
                "nombre": "Tequeños (24 Unidades)",
                "descripcion": "Queso envuelto en masa frita",
                "ingredientes": ["Queso", "Trigo de Trigo"],
                "infoLogo": "img/icon/info/btnInfoAzul.png",
                "img": "img/arepas/Tequenos24.jpg",
                "btn": "img/icon/cart/btnAzul.png",
                "tipo": "",
                "precio": 155,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 13,
                "nombre": "Tequeños (12 Unidades)",
                "descripcion": "Queso envuelto en masa frita",
                "ingredientes": ["Queso", "Trigo de Trigo"],
                "infoLogo": "img/icon/info/btnInfoAzul.png",
                "img": "img/arepas/Tequenos12.jpg",
                "btn": "img/icon/cart/btnAmarillo.png",
                "tipo": "",
                "precio": 85,
                "cantidad": 0,
                "total": 0
            },
            {
                id: 14,
                "nombre": "Tequeños (6 Unidades)",
                "descripcion": "Queso envuelto en masa frita",
                "ingredientes": ["Queso", "Trigo de Trigo"],
                "infoLogo": "img/icon/info/btnInfoAzul.png",
                "img": "img/arepas/Tequenos6.jpg",
                "btn": "img/icon/cart/btnRojo.png",
                "tipo": "",
                "precio": 50,
                "cantidad": 0,
                "total": 0
            }
        ],
        Slide4: [{
            id: 15,
            "nombre": "Empanada de Pollo",
            "descripcion": "",
            "ingredientes": [],
            "infoLogo": "",
            "img": "",
            "btn": "",
            "precio": 45,
            "cantidad": 0,
            "total": 0
        }, {
            id: 16,
            "nombre": "Empanada de Carne",
            "descripcion": "",
            "ingredientes": [],
            "infoLogo": "",
            "img": "",
            "btn": "",
            "precio": 45,
            "cantidad": 0,
            "total": 0
        }, {
            id: 17,
            "nombre": "Empanada de Poroto y Queso",
            "descripcion": "",
            "ingredientes": [],
            "infoLogo": "",
            "img": "",
            "btn": "",
            "precio": 45,
            "cantidad": 0,
            "total": 0
        }, {
            id: 18,
            "nombre": "Empanada de Queso",
            "descripcion": "",
            "ingredientes": [],
            "infoLogo": "",
            "img": "",
            "btn": "",
            "precio": 45,
            "cantidad": 0,
            "total": 0
        }],
        Slide5: [{
            id: 19,
            "nombre": "Tartara",
            "descripcion": "",
            "ingredientes": [],
            "infoLogo": "",
            "img": "",
            "btn": "",
            "precio": 15,
            "cantidad": 0,
            "total": 0
        }, {
            id: 20,
            "nombre": "Pirulo (Picante)",
            "descripcion": "",
            "ingredientes": [],
            "infoLogo": "",
            "img": "",
            "btn": "",
            "precio": 15,
            "cantidad": 0,
            "total": 0
        }]
    };
}




// id: 12,
// "nombre": "Tequeño",
// "descripcion": "Queso envuelto en masa frita",
// "ingredientes": ["Queso", "Trigo de Trigo"],
// "infoLogo": "img/icon/info/btnInfoAzul.png",
// "img": "img/arepas/Tequeno.png",
// "btnVCuatro": "img/icon/cart/btnAmarillo.png",
// "btnDoce": "img/icon/cart/btnAzul.png",
// "btnSeis": "img/icon/cart/btnRojo.png",
// "precioVCuatro": 100,
// "precioDoce": 60,
// "precioSeis": 30,
// "cantidadVCuatro": 0,
// "cantidadDoce": 0,
// "cantidadSeis": 0,
// "cantidad": 0,
// "total": 0
// id: 12,
// "nombre": "Tequeño",
// "descripcion": "Queso envuelto en masa frita",
// "ingredientes": ["Queso", "Trigo de Trigo"],
// "infoLogo": "img/icon/info/btnInfoAmarillo.png",
// "img": "img/arepas/Tequeño.png",
// "btnMaiz": "img/icon/trigoMaiz/btnMaizAmarillo.png",
// "btnTrigo": "img/icon/trigoMaiz/btnTrigoAmarillo.png",
// "precio": 45,
// "cantidadTrigo": 0,
// "cantidadMaiz": 0,
// "cantidad": 0,
// "total": 0