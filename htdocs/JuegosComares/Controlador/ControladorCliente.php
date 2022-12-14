<?php
require_once './Modelo/Cliente.php';
require_once 'Conexion.php';

class ControladorCliente{
    public static function insertar($c) {
        try {
            $conex=new Conexion();
            $reg=$conex->exec("INSERT INTO cliente (DNI,Nombre,Apellidos,Direccion,Localidad,Clave,Tipo) "
                    . "VALUES('$c->DNI', '$c->Nombre', '$c->Apellidos', '$c->Direccion', '$c->Localidad', '$c->Clave', 'cliente')");
            unset($conex);
            return $reg;
        } catch (PDOException $ex) {
            echo "<a href=index.php>Ir a Inicio</a>";
            die("ERROR EN LA BBDD:".$ex->getMessage());
        }
        unset($conex);
    }
    
    public static function  buscarCliente($dni) {
        try {
            $conex=new Conexion();
            $result=$conex->query("SELECT * FROM cliente WHERE DNI='$dni'");
            if ($result->rowCount()){
                $reg=$result->fetchObject();
                $c=new Cliente($reg->DNI,$reg->Nombre,$reg->Apellidos, $reg->Direccion, $reg->Localidad, $reg->Clave);
                return $c;
            } else {
                return $c=false;
            }
            unset($conex);
            return $c;
            
        } catch (PDOException $ex) {
            echo "<a href=index.php>Ir a Inicio</a>";
            die("ERROR EN LA BBDD".$ex->getMessage());
        }     
    }
    
    public static function recuperarTodos(){
        try{
            $conex=new Conexion();
            $result=$conex->query("select * from cliente");
            if($result->rowCount()){
                while($reg=$result->fetchObject()){
                    $c=new Cliente($reg->DNI,$reg->Nombre,$reg->Apellidos, $reg->Direccion, $reg->Localidad, $reg->Clave);
                    $clientes[]=$c;
                }
            }else $clientes=false;
            unset($conex);
            return $clientes;
        } catch (PDOException $ex) {
           echo $ex->getMessage();
        }
    }
}

