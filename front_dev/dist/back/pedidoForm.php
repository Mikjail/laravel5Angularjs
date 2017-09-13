<?php
include("pedido.php");
session_start();

	$data = json_decode(file_get_contents('php://input'), true);
	
	$comment = "No ingreso";
	
	$persona = new Cliente();
	
	if(isset($data['commentForm'])){
		$persona->comment = $data['commentForm'];
	}
	else{
		$persona->comment = "no comments";
	}
	if(isset($data['calleForm']) || isset($data['alturaForm'])  || isset($data['localidadForm']) ||  isset($data['pisoForm']) || isset($data['deptoForm']) ){
		$persona->calle = $data['calleForm'];
		$persona->altura = $data['alturaForm'];
		$persona->localidad = $data['localidadForm'];
		$persona->piso = $data['pisoForm'];
		$persona->depto = $data['deptoForm'];
		$direccion=true;
	}
	else{
		$direccion=false;
	}

	$persona->nombre = $data['nombreForm'];
	$persona->apellido = $data['apellidoForm'];
	$persona->email = $data['mailForm'];
	$persona->telefono = $data['telForm'];
	
		$to = 'pedidos@cambur-pinton.com, '.$persona->email;
		$message = "
<html lang='en'>
	<head>
		<meta charset='UTF-8'>
		<meta name='viewport' content='width=device-width, initial-scale=1.0'>
		<title>Cambur Pinton</title>
		<style>				
		.tabla {
			border: 1px solid black;
			border-radius: 50px 50px 50px 50px;
			height: 50%;
			width: 60%;
			margin: auto;
			color: white;
			background: url('http://www.cambur-pinton.com/dev/img/FondoPaginaWeb.png') center center no-repeat;
			background-size: cover;
			background-color: black;
			text-align: center;
			box-shadow: 2px 2px 2px 2px #525252;
			font-family: 'Arial','sans-serif';
		}

		table {
			color: black;
			margin: 20px auto auto auto;
			border-collapse: collapse;
		}
		
		table,th,td{
			border: 1px solid black;
		}

		table th {
			background-color: #f39200;
			color: black;
		}

		table th,
		table td {
			text-align: center;
			padding: 8px;
		}

		table tr {
			background-color: white;
		}
		
		tr:hover {
			background-color: #f5f5f5
		}

		img {
			width: 30%;
			height: 62%;
		}
		</style>
	</head>
	<body>
					<div class='tabla'>
						<img src='http://www.cambur-pinton.com/img/ImagotipoBlanco.png'>
						<h1>Gracias por elegirnos</h1>
						<p>Tu pedido es el siguiente y nos comunicaremos contigo en breve para confirmar y darte tiempo estimado de entrega</p>
					</div>
				<table>
					<thead>
							<th>
								Nombre
							</th>
							<th>
								Mail
							</th>
							<th>
								Telefono
							</th>";
							if($direccion){
								$message .="<th>Direccion</th>
								<th>Localidad</th>";
							};
							$message .="
							<th>
								comentario
							</th>
					<thead>
					<tbody>
							<tr>
								<td>".$persona->nombre."</td>
								<td>".$persona->email."</td>
								<td>".$persona->telefono."</td>";
							if($direccion){
								$message .="<td>".$persona->calle." ".$persona->altura." ".$persona->piso." ".$persona->depto."</td>
										<td>".$persona->localidad."</td>";
							
							}
								$message .="<td>".$persona->comment."</td>
							</tr>
					</tbody>
				</table>
				<br>";

if (isset($data['productoPedidoForm']) && !is_null($data['productoPedidoForm'])) {

	$productoPedido = $data['productoPedidoForm'];
	if(isset($productoPedido['arepas']) && !is_null($productoPedido['arepas'])){
		$arepas= $productoPedido['arepas'];
	}else{
		$arepas=null;
	};
	if(isset($productoPedido['tequenos']) && !is_null($productoPedido['tequenos'])){
		$tequenos =$productoPedido['tequenos'];
	}else{
		$tequenos=null;
	};
	if(isset($productoPedido['empanadas']) && !is_null($productoPedido['empanadas'])){
		$empanadas=$productoPedido['empanadas'];
	}else{
		$empanadas=null;
	};
	if(isset($productoPedido['salsas']) && !is_null($productoPedido['salsas'])){
		$salsas=$productoPedido['salsas'];
	}else{
		$salsas=null;
	};

	if(!is_null($arepas)){
	$cantidad= 0;
	$total = 0;
	$message .= "<table>
					<thead>
					     	<th>Arepa</th>
					        <th>Trigo</th>
							<th>Maiz</th>
					        <th>Precio (Unidad)</th>
					</thead>";	
  		foreach ($arepas as $producto) {
		$totalArepa=0;
			$message .="<tr><td>".$producto['nombre']."</td>"; 
				  if(isset($producto['cantidadTrigo'])){
					  	$cantidad += floatval($producto['cantidadTrigo']);
						$message .= "<td>".$producto['cantidadTrigo']."</td>";	  
				  }else{
					  	$message .= "<td>0</td>";
				  }
				  if(isset($producto['cantidadMaiz'])){
					  	$cantidad += floatval($producto['cantidadMaiz']);
						$message .= "<td>".$producto['cantidadMaiz']."</td>";
				  }else{
					  	$message .= "<td>0</td>";
				  }
	  			$message .= "<td>".$producto['precio']."</td>";
				$total += floatval($producto['precio']) * floatval($producto['cantidadTrigo']);
				$total += floatval($producto['precio']) * floatval($producto['cantidadMaiz']); 
							
  		}
  	$message .="<tr><td><strong>TOTAL</strong></td>"
	  			."<td colspan='2'><strong>".$cantidad."</strong></td>"
  				."<td><strong>".$total."$</strong></td></tr>";
	} 	
	if(!is_null($tequenos)){
	$totalTequenos=0;
	$cantidadTequenos=0;
	$message .= "</table><br><table>
							<thead>
					        <th>Tequenos</th>
					        <th>Cantidad</th>
							<th>Tipo</th>
							<th>Precio</th>
							</thead>";			
		foreach ($tequenos as $producto) {
	  		$message .="<tbody>
	  			  <tr>
	  		      <td>".$producto['nombre']."</td>"
	  			."<td>".$producto['cantidad']."</td>";
			if($producto['tipo'] != ""){
	  		$message .="<td>".$producto['tipo']."</td>";
			}
			else{
	  		$message .="<td>"."fritos"."</td>";
			}
	  		$message .="<td>".$producto['precio']."</td>";
	  			
	  			$totalTequenos += floatval($producto['precio']) * floatval($producto['cantidad']); 
  				$cantidadTequenos+= floatval($producto['cantidad']);
  		}
		  $message .="<tr><td><strong>TOTAL</strong></td>"
  				."<td colspan='2'><strong>".$cantidadTequenos."</strong></td>"
  				."<td><strong>".$totalTequenos."$</strong></td></tr>";
	}
	if(!is_null($empanadas)){
	$totalEmpanadas=0; 
	$cantidadEmpanadas=0;
	$message .= "</table><br><table>
							<thead>
					        <th>Empanadas</th>
					        <th>Cantidad</th>
							<th>Precio (Unidad)</th>
							</thead>";			
		foreach ($empanadas as $producto) {
	  		$message .="<tbody>
	  			  <tr>
	  		      <td>".$producto['nombre']."</td>"
	  			."<td>".$producto['cantidad']."</td>"
	  			."<td>".$producto['precio']."</td>"
	  			."</tr>";
				// ."<td>".floatval($producto['precio']) * floatval($producto['cantidad'])."</td>"
	  			// ."</tr>";
	  			
	  			$totalEmpanadas += floatval($producto['precio']) * floatval($producto['cantidad']); 
  				$cantidadEmpanadas += floatval($producto['cantidad']);
  		}
	$message .="<tr><td><strong>TOTAL</strong></td><td><strong>".$cantidadEmpanadas."</strong></td>"
  			."<td><strong>".$totalEmpanadas."$</strong></td></tr>";
	}
	if(!is_null($salsas)){
	$totalSalsas=0; 
	$cantidadSalsas=0;
	$message .= "</table><br><table>
							<thead>
					        <th>Salsas</th>
					        <th>Cantidad</th>
							<th>Precio (Unidad)</th>
							</thead>";			
		foreach ($salsas as $producto) {
	  		$message .="<tbody>
	  			  <tr>
	  		      <td>".$producto['nombre']."</td>"
	  			."<td>".$producto['cantidad']."</td>"
	  			."<td>".$producto['precio']."</td>"
	  			."</tr>";
				// ."<td>".floatval($producto['precio']) * floatval($producto['cantidad'])."</td>"
	  			// ."</tr>";
	  			
	  			$totalSalsas += floatval($producto['precio']) * floatval($producto['cantidad']); 
  				$cantidadSalsas += floatval($producto['cantidad']);
  		}
	$message .="<tr><td><strong>TOTAL</strong></td><td><strong>".$cantidadSalsas."</strong></td>"
  			."<td><strong>".$totalSalsas."$</strong></td></tr>";
	}
	$message .="</tbody></table>";
	$message .="<p>Agradecemos tu preferencia, así como cualquier comentario o sugerencia para cada día mejorar nuestro servicio,</p>";
	$message .="<p>Que tengas un buen provecho y disfrutes de tu pedido,</p>";
	$message .="<p>Cambur Pintón.</p>";
	$message .="</body></html>";

		if(!is_null($empanadas) || !is_null($arepas) || !is_null($tequenos) || !is_null($salsas)){
			$subject = "Nuevo Pedido";
			$headers = "Content-type: text/html; charset=iso-8859-1"."\r\n";
			$headers .= "From: pedidos@cambur-pinton.com"."\r\n";
			$headers .= "Bcc: oswaldosmoncricket@gmail.com, mikjailsalazar@gmail.com, nicholaisalazar@gmail.com, pedidos@cambur-pinton.com";
		}
	}

	mail($to, $subject, $message, $headers);

	$pedido = new Pedido();
	$pedido->agregarCliente($persona);
	Pedido::guardarPedido($pedido);
 ?>