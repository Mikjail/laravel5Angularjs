<!DOCTYPE html>
<html ng-app="starter">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="Cambur Pinton, Arepas, Empanadas, Comida, Venezuela, Argentina">
    <meta name="description" content="Comida Venezolana en Argentina">
    <meta name="Author" content="Cambur Pinton">
    <meta name="refresh" content="30">
    <meta name="google-site-verification" content="QzWamyrYa0apm3oL_9f6fxLLupJU2PZknL9WLZsYNIE" />
    <meta property="fb:app_id" content="1147719208592733" />
    <meta property="og:url" content="http://www.cambur-pinton.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Cambur Pinton" />
    <meta property="og:description" content="Cambur Pintón - Comida Venezolana" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image" content="http://www.cambur-pinton.com/img/camburPinton.png" />
    <title>Cambur Pintón</title>
    <!-- inject:css -->
    <!-- endinject -->
    <!-- Custom CSS -->
    <link rel="icon" href="favicon.ico">
    <link rel="shortcut icon" href="favicon.ico">
    <link href="css/lib.css" rel="stylesheet">
    <link href="css/camburPinton.css" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" ng-controller="productosCtrl ">
    <!-- Navigation -->
    <div id="fb-root"></div>
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">

            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <i class="fa fa-cutlery"></i>Cambur Pintón
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#food">Menú</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#mapSection">Mapa</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Contacto</a>
                    </li>
                    <li>
                        <a id="btnPedido" href="#menu" data-toggle="modal" data-target="#myModalComprar">Pedir</a>
                    </li>
                    <li>
                        <a href="#suPedido" data-toggle="modal" data-target="#myModalComprar">
                            <img style="margin-top: -9px;" src="img/icon/cart/btnCartNegro.png" alt="">
                            <strong>{{totalCantidad()}}</strong>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    <!-- Intro Header -->
    <header class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-offset-2 col-xs-8">
                        <img src="img/icon/2.gif" class="lazy img-responsive" data-original="img/ImagotipoBlanco.png " alt=" ">
                    </div>
                </div>
                <div class="row">
                    <a href="#food" class="bntFooter page-scroll btn btn-circle">
                        <i class="fa fa-angle-down animated"></i>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </header>
    <section id="nosotros" class="nosotros-section visible-md visible-lg">
        <div id="parrafo" class="col-md-8 col-md-offset-2">
            <p>Sentimos que hablamos por todos los venezolanos al decir que fuimos recibidos de la manera más calurosa en un país con el que contrastamos enriquecedoramente en nuestras formas de ser. Queremos recompensar a nuestros anfitriones con lo más
                rico de nuestras costumbres.</p>
            <p>Llegamos en familia para trabajar y darles lo mejor de nosotros. En principio queremos que degusten los platos más célebres de la gastronomía de nuestro país y para comenzar con ello no hay otra manera de hacerlo que con la arepa.</p>
        </div>
    </section>
    <!-- Download Section -->
    <section id="food" class="food-section text-center">
        <slide-Arepas></slide-Arepas>
        <detalles></detalles>
        <div class="modal fade" id="myModalComprar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div ng-view>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section -->
    <section class="container map-section" id="mapSection">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 textLogo text-center">
                    <div class="col-md-2 col-md-offset-5 col-sm-2 col-xs-4 col-xs-offset-4">
                        <img src="img/icon/2.gif" class="lazy img-responsive" data-original="img/ImagotipoBlanco.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="map"></div>
        <div class="col-md-12 col-xs-12 textMap text-center">
            <p><span style="color:#f39200">Próximamente ampliaremos nuestro rango </span></p>
        </div>
    </section>
    <!-- Contact Section -->
    <section id="contact" class="container content-section text-center " ng-controller="formCtrl ">
        <contacto></contacto>
    </section>
    <section class="copyRight-section ">
        <div class="container text-center ">
            <p style="color: white;"><a style="text-decoration: underline;" target="blank" href="https://www.linkedin.com/in/mikjailsalazar">Mik+Vibe</a> &copy; Todos los derechos reservados 2016</p>
        </div>
    </section>
    <!-- inject:js -->
    <!-- endinject -->
    <script src="<?= asset('js/lib.min.js') ?>"></script>
    <!-- jQuery -->
    <script src="<?= asset('js/scroll.js') ?>"></script>
    <!-- Services -->
    <script src="<?= asset('js/app.js') ?>"></script>
    <!-- App -->
    <script src="<?= asset('js/camburTemplate.js') ?>"></script>
    <!-- Services -->
    <script src="<?= asset('js/service.js') ?>"></script>
    <!-- Controller  -->
    <script src="<?= asset('js/controllers/controller.js') ?>"></script>
    <!-- Directives  -->
    <script src="<?= asset('js/directives/directives.js') ?>"></script>
    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-91000119-1', 'auto');
        ga('send', 'pageview');
    </script>
    <script type="text/javascript" charset="utf-8">
        $(function() {
            $("img.lazy").lazyload();
            effect: "fadeIn"
        });
    </script>
    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8&appId=1147719208592733";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <script>
        // dom ready
        $(function() {

            //if (typeof google !== "undefined"){
            if (window.google && google.maps) {
                // Map script is already loaded
                initMap();
            } else {
                //alert("Lazy loading Google map...");
                lazyLoadGoogleMap();
            }

        });

        function initMap() {
            // Create a map object and specify the DOM element for display.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: -34.5703,
                    lng: -58.4458
                },
                scrollwheel: false,
                zoom: 13,
                zoomControl: true,
                disableDefaultUI: true
            });
            var rangoDeEntregaCamburPinton = [{
                lat: -34.55955,
                lng: -58.44521
            }, {
                lat: -34.55485,
                lng: -58.43757
            }, {
                lat: -34.54824,
                lng: -58.44319
            }, {
                lat: -34.5529,
                lng: -58.45087
            }, {
                lat: -34.55047,
                lng: -58.45315
            }, {
                lat: -34.56015,
                lng: -58.47155
            }, {
                lat: -34.56552,
                lng: -58.46701
            }, {
                lat: -34.56535,
                lng: -58.46731
            }, {
                lat: -34.57347,
                lng: -58.48069
            }, {
                lat: -34.58005,
                lng: -58.47538
            }, {
                lat: -34.58086,
                lng: -58.47473
            }, {
                lat: -34.58227,
                lng: -58.47366
            }, {
                lat: -34.58591,
                lng: -58.46147
            }, {
                lat: -34.58542,
                lng: -58.45963
            }, {
                lat: -34.58563,
                lng: -58.4598
            }, {
                lat: -34.58877,
                lng: -58.45074
            }, {
                lat: -34.59648,
                lng: -58.44259
            }, {
                lat: -34.5821,
                lng: -58.42019
            }, {
                lat: -34.58063,
                lng: -58.42048
            }, {
                lat: -34.57484,
                lng: -58.41527
            }, {
                lat: -34.57107,
                lng: -58.42315
            }, {
                lat: -34.56353,
                lng: -58.43655
            }, {
                lat: -34.56171,
                lng: -58.44346
            }, {
                lat: -34.55947,
                lng: -58.44519
            }];

            var rango = new google.maps.Polygon({
                path: rangoDeEntregaCamburPinton,
                geodesic: true,
                strokeColor: '#f39200',
                strokeOpacity: 1.0,
                fillColor: '#35c72e',
                fillOpacity: 0.3,
                strokeWeight: 2
            });

            rango.setMap(map);
        }

        function lazyLoadGoogleMap() {
            $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC9qoUtPZFr24eqjQ0Lfhf4HXUMg_T85CU&callback=initMap")
                .done(function(script, textStatus) {
                    //alert("Google map script loaded successfully");
                })
                .fail(function(jqxhr, settings, ex) {
                    //alert("Could not load Google Map script: " + jqxhr);
                });
        }
    </script>

</body>

</html>