<?php
class Cliente{
    private $DNI;
    private $Nombre;
    private $Apellidos;
    private $Direccion;
    private $Localidad;
    private $Clave;
    
    public function __construct($DNI, $Nombre, $Apellidos, $Direccion, $Localidad, $Clave) {
        $this->DNI = $DNI;
        $this->Nombre = $Nombre;
        $this->Apellidos = $Apellidos;
        $this->Direccion = $Direccion;
        $this->Localidad = $Localidad;
        $this->Clave = $Clave;
    }
    
    public function __get($name) {
        return $this->$name;
    }

    public function __set($name, $value) {
        $this->$name=$value;
    }

}
