<?php
require_once './Modelo/Alquiler.php';
require_once './Modelo/Cliente.php';
require_once 'Conexion.php';

class ControladorAlquiler{
    public static function insertar($a) {
        try {
            $conex=new Conexion();
            $reg=$conex->exec("INSERT INTO alquiler (Cod_juego,DNI_cliente, Fecha_alquiler, Fecha_devol) "
                    . "VALUES('$a->Codigo_juego','$a->DNI_cliente','$a->Fecha_alquiler',null)");
            unset($conex);
            return $reg;
        } catch (PDOException $ex) {
            echo "<a href=index.php>Ir a Inicio</a>";
            die("ERROR EN LA BBDD:".$ex->getMessage());
        }
        unset($conex);
    }
    
    public static function entregarJuego($codigojuego){
        try{
            $conex=new Conexion();
            $reg=$conex->exec("UPDATE alquiler set Fecha_devol = '".date('Y-m-d')."' where Cod_juego='".$codigojuego."' and Fecha_devol is null");
            unset($conex);
            return $reg;
        } catch (Exception $ex) {
            echo "<a href=index.php>Ir a Inicio</a>";
            die("ERROR EN LA BBDD:".$ex->getMessage());
        }
    }
    
    public static function recuperarTodos(){
        try{
            $conex=new Conexion();
            $result=$conex->query("select * from alquiler");
            if($result->rowCount()){
                while($reg=$result->fetchObject()){
                    $a=new Alquiler($reg->Cod_juego,$reg->DNI_cliente,$reg->Fecha_alquiler,$reg->Fecha_devol);
                    $alquileres[]=$a;
                }
            }else $alquileres=false;
            unset($conex);
            return $alquileres;
        } catch (PDOException $ex) {
           echo $ex->getMessage();
        }
    }
    
    
    public static function recuperarTodosAlquilados(){
        try{
            $conex=new Conexion();
            $result=$conex->query("select * from alquiler where Fecha_devol is null");
            if($result->rowCount()){
                while($reg=$result->fetchObject()){
                    $a=new Alquiler($reg->Cod_juego,$reg->DNI_cliente,$reg->Fecha_alquiler,$reg->Fecha_devol);
                    $alquileres[]=$a;
                }
            }else $alquileres=false;
            unset($conex);
            return $alquileres;
        } catch (PDOException $ex) {
           echo $ex->getMessage();
        }
    }
    
    
    
    
 
}
