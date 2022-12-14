<?php
class Alquiler{
    private $Codigo_juego;
    private $DNI_cliente;
    private $Fecha_alquiler;
    private $Fecha_devol;
    
    public function __construct($Codigo_juego, $DNI_cliente, $Fecha_alquiler) {
        $this->Codigo_juego = $Codigo_juego;
        $this->DNI_cliente = $DNI_cliente;
        $this->Fecha_alquiler = $Fecha_alquiler;
        $this->Fecha_devol = null;
    }

    public function __get($name) {
        return $this->$name;
    }

    public function __set($name, $value) {
        $this->$name=$value;
    }
}
