productosCtrl.$inject = ['$scope', 'ProductsService', 'ProductsTypeService', '$q'];
formCtrl.$inject = ['$scope', '$http', '$location']
angular.module('starter')
    .controller("productosCtrl", productosCtrl)
    .controller("formCtrl", formCtrl);

function productosCtrl($scope, ProductsService,ProductsTypeService) {

    $scope.viewArepas = "";
    $scope.detalles;
    $scope.productoPedido = {
        arepas: null,
        tequenos: null,
        empanadas: null
    };

    $scope.productsType={};
    $scope.products={};
    $scope.pTypeSelected={"id": 1,
    "name": "arepaMaiz",
    "description": "Arepas de Maiz"};
    
    ProductsService.getProducts().then(({data})=>{
        $scope.products= data;
        ProductsTypeService.getProductsType().then(({data})=>{
                $scope.productsType = data;
       
        $scope.totalBought= 0;

        $scope.productTypeSelected = function(productType){
            $scope.pTypeSelected = productType;
        }

        $scope.totalCompra = ()=> {
             $scope.totally = 0;
            $scope.products.forEach((product)=> {
                if(product.cant > 0){
                  $scope.totally+= (product.price * product.cant); 
                 }
            });
            return  $scope.totally;
        }
        
        $scope.totalCantidad = ()=>{
            $scope.totalCantBought =0;
            $scope.products.forEach((product)=>{
                $scope.totalCantBought  += product.cant;
            });
            return  $scope.totalCantBought;
        }

        $scope.productsBought = ()=>{
            return $scope.products.filter((product)=>{ return product.cant > 0 })
        }

        $scope.productTypeName = (product)=>{
            return $scope.productsType.find((productType)=>{ return productType.id == product.productstype_id})
        }
       
        $scope.totalByType = (type) =>{
            $scope.cantTotalByType=0;
            $scope.products.forEach((product)=>{
               if(product.productstype_id === type.id){
                $scope.cantTotalByType += product.price * product.cant;
               }
            })
            return  $scope.cantTotalByType;
        }

        $scope.substractProduct = (product)=>{ 
            product.cant -= 1;
            if($scope.totalCompra()< 150){
                product.cant += 1;               
            }
            console.log(product.cant);
         }
        });
        
        $scope.addProduct= (product)=>{
            product.cant += 1;
        }


    }); 


    $scope.isOpen = function() {
        var date = new Date();
        var day = date.getDay();
        var hour = date.getHours();

        if (day >= 2 && day <= 7) {
            if (hour >= 18 && hour <= 23) {
                return true;
            }
        }

        return true;
    }

    $scope.cantidadTotal = 0;



}

function formCtrl($scope, $http, $location) {


    $scope.registrarForm = function() {
        console.log($scope.productsBought())
        $http.post('formContact/pedidoForm.php', {
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
            productoPedidoForm: $scope.productsBought(),
            productsType: $scope.productsType
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