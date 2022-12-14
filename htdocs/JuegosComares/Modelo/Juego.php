<?php
class Juego{
    private $Codigo;
    private $Nombre_juego;
    private $Nombre_consola;
    private $Anno;
    private $Precio;
    private $Alquilado;
    private $Imagen;
    private $descripcion;
    
    public function __construct($Codigo, $Nombre_juego, $Nombre_consola, $Anno, $Precio, $Alquilado, $Imagen, $descripcion) {
        $this->Codigo = $Codigo;
        $this->Nombre_juego = $Nombre_juego;
        $this->Nombre_consola = $Nombre_consola;
        $this->Anno = $Anno;
        $this->Precio = $Precio;
        $this->Alquilado = $Alquilado;
        $this->Imagen = $Imagen;
        $this->descripcion = $descripcion;
    }

    public function __get($name) {
        return $this->$name;
    }

    public function __set($name, $value) {
        $this->$name=$value;
    }
}
