<?php
require_once './Modelo/Juego.php';
require_once 'Conexion.php';

class ControladorJuego{
    public static function insertar($j) {
        try {
            $conex=new Conexion();
            $reg=$conex->exec("INSERT INTO juegos (Codigo,Nombre_juego,Nombre_consola,Anno,Precio,Alquilado,Imagen) "
                    . "VALUES($j->codigo,'$j->nombrejuego','$j->nombreconsola', $j->ano, $j->precio, '$j->alquilado', '$j->imagen', '$j->descripcion')");
            unset($conex);
            return $reg;
        } catch (PDOException $ex) {
            echo "<a href=index.php>Ir a Inicio</a>";
            die("ERROR EN LA BBDD:".$ex->getMessage());
        }
        unset($conex);
    }
    
    public static function  buscarJuego($cod) {
        try {
            $conex=new Conexion();
            $result=$conex->query("SELECT * FROM juegos WHERE Codigo='$cod'");
            if ($result->rowCount()){
                $reg=$result->fetchObject();
                $j=new Juego($reg->Codigo,$reg->Nombre_juego,$reg->Nombre_consola,$reg->Anno,$reg->Precio,$reg->Alquilado,$reg->Imagen,$reg->descripcion);
                return $j;
            } else {
                return $j=false;
            }
            unset($conex);
            return $j;
            
        } catch (PDOException $ex) {
            echo "<a href=index.php>Ir a Inicio</a>";
            die("ERROR EN LA BBDD".$ex->getMessage());
        }     
    }
    
    public static function entregarJuego($codigojuego){
        try{
            $conex=new Conexion();
            $reg=$conex->exec("UPDATE juegos set Alquilado = 'NO' where Codigo='".$codigojuego."'");
            unset($conex);
            return $reg;
        } catch (Exception $ex) {
            echo "<a href=index.php>Ir a Inicio</a>";
            die("ERROR EN LA BBDD:".$ex->getMessage());
        }
    }
    
    public static function alquilarJuego($codigojuego){
        try{
            $conex=new Conexion();
            $reg=$conex->exec("UPDATE juegos set Alquilado = 'SI' where Codigo='".$codigojuego."'");
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
            $result=$conex->query("select * from juegos");
            if($result->rowCount()){
                while($reg=$result->fetchObject()){
                    $j=new Juego($reg->Codigo,$reg->Nombre_juego,$reg->Nombre_consola,$reg->Anno,$reg->Precio,$reg->Alquilado,$reg->Imagen,$reg->descripcion);
                    $juegos[]=$j;
                }
            }else $juegos=false;
            unset($conex);
            return $juegos;
        } catch (PDOException $ex) {
           echo $ex->getMessage();
        }
    }
    
    public static function recuperarTodosNoAlquilados(){
        try{
            $conex=new Conexion();
            $result=$conex->query("select * from juegos where Alquilado = 'NO'");
            if($result->rowCount()){
                while($reg=$result->fetchObject()){
                    $j=new Juego($reg->Codigo,$reg->Nombre_juego,$reg->Nombre_consola,$reg->Anno,$reg->Precio,$reg->Alquilado,$reg->Imagen,$reg->descripcion);
                    $juegos[]=$j;
                }
            }else $juegos=false;
            unset($conex);
            return $juegos;
        } catch (PDOException $ex) {
           echo $ex->getMessage();
        }
    }
    
    public static function recuperarTodosAlquilados(){
        try{
            $conex=new Conexion();
            $result=$conex->query("select * from juegos where Alquilado = 'SI'");
            if($result->rowCount()){
                while($reg=$result->fetchObject()){
                    $j=new Juego($reg->Codigo,$reg->Nombre_juego,$reg->Nombre_consola,$reg->Anno,$reg->Precio,$reg->Alquilado,$reg->Imagen,$reg->descripcion);
                    $juegos[]=$j;
                }
            }else $juegos=false;
            unset($conex);
            return $juegos;
        } catch (PDOException $ex) {
           echo $ex->getMessage();
        }
    }
    
}
