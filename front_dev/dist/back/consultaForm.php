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
							</th>
							<th>
								comentario
							</th>
					<thead>
					<tbody>
							<tr>
								<td>".$persona->nombre."</td>
								<td>".$persona->email."</td>
								<td>".$persona->telefono."</td>
								<td>".$persona->comment."</td>
							</tr>
					</tbody>
				</table>
				<br>";
	
	$message .="<p>Agradecemos tu preferencia, así como cualquier comentario o sugerencia para cada día mejorar nuestro servicio,</p>";
	$message .="<p>Que tengas un buen provecho y disfrutes de tu pedido,</p>";
	$message .="<p>Cambur Pintón.</p>";
	$message .="</body></html>";

	$subject = "Contacto - Cambur Pintón";
	$headers = "Content-type: text/html; charset=iso-8859-1"."\r\n";
	$headers .= "From: info@cambur-pinton.com"."\r\n";
	$headers .= "Bcc: oswaldosmoncricket@gmail.com, mikjailsalazar@gmail.com, nicholaisalazar@gmail.com, info@cambur-pinton.com";
		
	
	
	//mail($to, $subject, $message, $headers);

	$pedido = new Pedido();
	$pedido->agregarCliente($persona);
	Pedido::guardarPedido($pedido);
 ?>