<?php
class Cliente{
    public $nombre;
    public $apellido;
    public $telefono;
    public $localidad;
    public $calle;
    public $altura;
    public $piso;
    public $depto;
    public $email;
    public $comment;

    function __construct(){
        $this->nombre="";
        $this->apellido="";
        $this->telefono="";
        $this->localidad="";
        $this->calle="";
        $this->altura="";
        $this->piso="";
        $this->depto="";
        $this->email="";
        $this->comment="";
    }

    public function toString(){
        return $this->nombre.";".
        $this->apellido.";".
        $this->telefono.";".
        $this->email.";".
        $this->calle.";".
        $this->altura.";".
        $this->piso.";".
        $this->depto.";".
        $this->localidad.";".
        $this->comment;
    }
    
}

?>