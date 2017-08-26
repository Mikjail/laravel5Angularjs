productosCtrl.$inject = ['$scope', 'ProductosService', 'ProductsService', '$q'];
formCtrl.$inject = ['$scope', '$http', '$location']
angular.module('starter')
    .controller("productosCtrl", productosCtrl)
    .controller("formCtrl", formCtrl);

function productosCtrl($scope, ProductosService, ProductsService) {
    $scope.productos = ProductosService;
    $scope.viewArepas = "";
    $scope.detalles;
    $scope.productoPedido = {
        arepas: null,
        tequenos: null,
        empanadas: null
    };
    
    ProductsService.getProducts().then(({data})=>{
        $scope.products= data;
        console.log($scope.products);
    });


    $scope.isOpen = function() {
        var date = new Date();
        var day = date.getDay();
        var hour = date.getHours();

        if (day >= 3 && day <= 6) {
            if (hour >= 18 && hour <= 23) {
                return true;
            }
        }

        return false;
    }

    $scope.cantidadTotal = 0;

    $scope.sumarCompraTrigo = function(id) {
        var producto = $scope.verDetalle(id);
        if (producto.cantidadTrigo >= 100) {
            producto.cantidadTrigo = 0;
        } else {
            producto.cantidadTrigo++;
            $scope.cantidadTotal++;
        }
    }

    $scope.sumarCompraMaiz = function(id) {
        var producto = $scope.verDetalle(id);
        if (producto.cantidadMaiz <= 100) {
            producto.cantidadMaiz++;
            $scope.cantidadTotal++;
        }
    }

    $scope.sumarCompraTequenos = function(id) {
        var producto = $scope.verDetalle(id);
        if (producto.cantidad <= 100) {
            producto.cantidad++;
            $scope.cantidadTotal++;
        }
    }

    $scope.verDetalle = function(id) {
        var idParameter = parseFloat(id);
        if (idParameter <= 5) {
            for (var i = 0; i < $scope.productos.Slide1.length; i++) {
                if ($scope.productos.Slide1[i].id == idParameter) {
                    $scope.detalles = $scope.productos.Slide1[i];
                    console.log($scope.detalles.id);
                    return $scope.detalles;
                }
            }
        }
        if (idParameter <= 10) {
            for (var i = 0; i < $scope.productos.Slide2.length; i++) {
                if ($scope.productos.Slide2[i].id == idParameter) {
                    $scope.detalles = $scope.productos.Slide2[i];
                    console.log($scope.detalles.id);
                    return $scope.detalles;
                }
            }
        }
        for (var i = 0; i < $scope.productos.Slide3.length; i++) {
            if ($scope.productos.Slide3[i].id == idParameter) {
                $scope.detalles = $scope.productos.Slide3[i];
                console.log($scope.detalles.id);
                return $scope.detalles;
            }
        }
    }

    $scope.totalCompra = function() {
        $totalCompra = 0;
        for (var i = 0; i < $scope.productos.Slide1.length; i++) {
            $totalCompra += $scope.productos.Slide1[i].cantidadTrigo * $scope.productos.Slide1[i].precio;
            $totalCompra += $scope.productos.Slide1[i].cantidadMaiz * $scope.productos.Slide1[i].precio;
        }
        for (var i = 0; i < $scope.productos.Slide2.length; i++) {
            $totalCompra += $scope.productos.Slide2[i].cantidadTrigo * $scope.productos.Slide2[i].precio;
            $totalCompra += $scope.productos.Slide2[i].cantidadMaiz * $scope.productos.Slide2[i].precio;

        }
        for (var i = 0; i < $scope.productos.Slide3.length; i++) {
            if (typeof $scope.productos.Slide3[i] != "undefined") {
                $totalCompra += $scope.productos.Slide3[i].cantidad * $scope.productos.Slide3[i].precio;
            }
        }
        for (var i = 0; i < $scope.productos.Slide4.length; i++) {
            if (typeof $scope.productos.Slide4[i] != "undefined") {
                $totalCompra += $scope.productos.Slide4[i].cantidad * $scope.productos.Slide4[i].precio;
            }
        }
        for (var i = 0; i < $scope.productos.Slide5.length; i++) {
            if (typeof $scope.productos.Slide5[i] != "undefined") {
                $totalCompra += $scope.productos.Slide5[i].cantidad * $scope.productos.Slide5[i].precio;
            }
        }
        return $totalCompra;
    }

    $scope.totalCantidad = function() {
        $totalCantidad = 0;
        if ($scope.totalCompra() > 0) {
            for (var i = 0; i < $scope.productos.Slide1.length; i++) {
                $totalCantidad += $scope.productos.Slide1[i].cantidadTrigo;
                $totalCantidad += $scope.productos.Slide1[i].cantidadMaiz;
            }
            for (var i = 0; i < $scope.productos.Slide2.length; i++) {
                $totalCantidad += $scope.productos.Slide2[i].cantidadTrigo;
                $totalCantidad += $scope.productos.Slide2[i].cantidadMaiz;
            }
            for (var i = 0; i < $scope.productos.Slide3.length; i++) {
                if (typeof $scope.productos.Slide3[i] != "undefined") {
                    $totalCantidad += $scope.productos.Slide3[i].cantidad;
                }
            }
            for (var i = 0; i < $scope.productos.Slide4.length; i++) {
                if (typeof $scope.productos.Slide4[i] != "undefined") {
                    $totalCantidad += $scope.productos.Slide4[i].cantidad;
                }
            }
            for (var i = 0; i < $scope.productos.Slide5.length; i++) {
                if (typeof $scope.productos.Slide5[i] != "undefined") {
                    $totalCantidad += $scope.productos.Slide5[i].cantidad;
                }
            }
        }
        return $totalCantidad;
    }

    $scope.suPedidoArepas = function() {
        var productoPedido = [];
        //Terminar logica para agregar los no repetidos que voy a mostrar...
        for (var i = 0; i < $scope.productos.Slide1.length; i++) {
            if ($scope.productos.Slide1[i].cantidadTrigo > 0 || $scope.productos.Slide1[i].cantidadMaiz > 0) {
                productoPedido.push($scope.productos.Slide1[i]);
            }
        }
        for (var i = 0; i < $scope.productos.Slide2.length; i++) {
            if ($scope.productos.Slide2[i].cantidadTrigo > 0 || $scope.productos.Slide2[i].cantidadMaiz > 0) {
                productoPedido.push($scope.productos.Slide2[i]);
            }
        }
        return productoPedido;
    }

    $scope.suPedidoTequenos = function() {
        var productoPedido = [];
        //Terminar logica para agregar los no repetidos que voy a mostrar...
        for (var i = 0; i < $scope.productos.Slide3.length; i++) {
            if ($scope.productos.Slide3[i].cantidad > 0) {
                productoPedido.push($scope.productos.Slide3[i]);
            }
        }
        return productoPedido;
    }

    $scope.suPedidoEmpanadas = function() {
        var productoPedido = [];
        //Terminar logica para agregar los no repetidos que voy a mostrar...
        for (var i = 0; i < $scope.productos.Slide4.length; i++) {
            if ($scope.productos.Slide4[i].cantidad > 0) {
                productoPedido.push($scope.productos.Slide4[i]);
            }
        }
        return productoPedido;
    }
    $scope.suPedidoSalsas = function() {
        var productoPedido = [];
        //Terminar logica para agregar los no repetidos que voy a mostrar...
        for (var i = 0; i < $scope.productos.Slide5.length; i++) {
            if ($scope.productos.Slide5[i].cantidad > 0) {
                productoPedido.push($scope.productos.Slide5[i]);
            }
        }
        return productoPedido;
    }

    $scope.totalPedidoTequenos = function() {
        var total = 0;
        for (var i = 0; i < $scope.productos.Slide3.length; i++) {
            total += $scope.productos.Slide3[i].precio * $scope.productos.Slide3[i].cantidad;
        }
        return total;
    }

    $scope.totalPedidoArepas = function() {
        var total = 0;
        for (var i = 0; i < $scope.productos.Slide1.length; i++) {
            total += $scope.productos.Slide1[i].precio * $scope.productos.Slide1[i].cantidadMaiz;
            total += $scope.productos.Slide1[i].precio * $scope.productos.Slide1[i].cantidadTrigo;
        }
        for (var i = 0; i < $scope.productos.Slide2.length; i++) {
            total += $scope.productos.Slide2[i].precio * $scope.productos.Slide2[i].cantidadTrigo;
            total += $scope.productos.Slide2[i].precio * $scope.productos.Slide2[i].cantidadMaiz;

        }
        return total;
    }

    $scope.totalPedidoEmpanadas = function() {
        var total = 0;
        for (var i = 0; i < $scope.productos.Slide4.length; i++) {
            total += $scope.productos.Slide4[i].precio * $scope.productos.Slide4[i].cantidad;
        }
        return total;
    }

    $scope.totalPedidoSalsas = function() {
        var total = 0;
        for (var i = 0; i < $scope.productos.Slide5.length; i++) {
            total += $scope.productos.Slide5[i].precio * $scope.productos.Slide5[i].cantidad;
        }
        return total;
    }

    $scope.actualizarPedido = function() {
        $scope.productoPedido.arepas = null;
        $scope.productoPedido.empanadas = null;
        $scope.productoPedido.tequenos = null;
        $scope.productoPedido.salsas = null;

        if ($scope.suPedidoArepas().length > 0) {
            $scope.productoPedido.arepas = $scope.suPedidoArepas();
        }
        if ($scope.suPedidoTequenos().length > 0) {
            $scope.productoPedido.tequenos = $scope.suPedidoTequenos();
        }

        if ($scope.suPedidoEmpanadas().length > 0) {
            $scope.productoPedido.empanadas = $scope.suPedidoEmpanadas();
        }

        if ($scope.suPedidoSalsas().length > 0) {
            $scope.productoPedido.salsas = $scope.suPedidoSalsas();
        }
    }

}

function formCtrl($scope, $http, $location) {


    $scope.registrarForm = function() {
        $scope.actualizarPedido();
        $http.post('back/pedidoForm.php', {
            nombreForm: $scope.nombreForm,
            apellidoForm: $scope.apellidoForm,
            mailForm: $scope.mailForm,
            telForm: $scope.telForm,
            calleForm: $scope.calle,
            alturaForm: $scope.altura,
            pisoForm: $scope.piso,
            deptoForm: $scope.depto,
            localidadForm: $scope.localidad,
            commentForm: $scope.comment,
            productoPedidoForm: $scope.productoPedido
        }).success(function(response) {
            console.log(response);
            $location.path("/finalOrder");
            $scope.nombreForm = "";
            $scope.apellidoForm = "";
            $scope.mailForm = "";
            $scope.telForm = "";
            $scope.comment = "";
            $scope.calle = "";
            $scope.altura = "";
            $scope.localidad = "";
            $scope.piso = "";
            $scope.depto = "";
        });
    }

    $scope.registrarConsulta = function() {
        $http.post('back/consultaForm.php', {
            nombreForm: $scope.nombreForm,
            apellidoForm: $scope.apellidoForm,
            mailForm: $scope.mailForm,
            telForm: $scope.telForm,
            commentForm: $scope.comment
        }).success(function(response) {
            console.log(response);
            $scope.nombreForm = "";
            $scope.apellidoForm = "";
            $scope.mailForm = "";
            $scope.telForm = "";
            $scope.comment = "";
        });
    }
}