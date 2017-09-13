<?php 
include("cliente.php");


class Pedido {
	private $_clientes;

	function __construct(){
		$this->_clientes = array();	
	}

	public function agregarCliente($persona){
		if (array_push($this->_clientes, $persona)) {
	    		return true;
			} else{
				return false;
			}
	}	

	public static function guardarPedido($pedido){
	
		$archivo = fopen("pedidos/pedidos.txt","a");
		$linea = $pedido->ToString();
		fwrite($archivo, $linea);

		fclose($archivo);		
	}

	// private function ObtenerEmpleadosTxt(){
	// 	if (file_exists("pedidos/empleados.txt")){
				
	// 		$archivo = fopen("archivosTP3/empleados.txt", "r");
	// 		while(!feof($archivo)){
	// 			$line = fgets($archivo);
	// 			$arrayEmpleado = explode(" ", $line);
	// 			if($arrayEmpleado[0] !=""){
	// 				$empleado = new Empleado($arrayEmpleado[1],
	// 					$arrayEmpleado[3],
	// 					$arrayEmpleado[2],
	// 					$arrayEmpleado[4],
	// 					$arrayEmpleado[5],
	// 					$arrayEmpleado[6],
	// 					$arrayEmpleado[7]);
	// 					$this->AgregarEmpleado($empleado);
	// 			}
	// 		}
	// 	}
	// }
	

	public static function ToArrayEmpleados($pedido){
		return $pedido->_empleados;
	}

	public function ToString(){
		$retorno="";
		foreach ($this->_clientes as $cliente) {
			$retorno .=$cliente->ToString()."\n";
		}
		return $retorno;
	}
}
 ?>