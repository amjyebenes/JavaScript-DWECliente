<?php 
require_once 'Controlador/ControladorCliente.php';
require_once 'Controlador/ControladorJuego.php';
require_once 'Controlador/ControladorAlquiler.php';
require_once 'Modelo/Alquiler.php';
try{
    session_start();
   
    if(isset($_POST['logout'])){
        session_destroy();
        session_unset();
        header('location:index.php');
    }

    if(isset($_POST['login'])){
        $cliente = ControladorCliente::buscarCliente($_POST['dni']);
        if($cliente && $cliente->Clave == md5($_POST['password'])){
            $_SESSION['dni']=$cliente->DNI;
            $_SESSION['nombre']=$cliente->Nombre;
        }else{
            echo "<h6>usuario incorrecto</h6>";
        }
    }
    
    if(isset($_POST['alquilar'])){
        ControladorJuego::alquilarJuego($_POST['alquilar']);
        $a = new Alquiler($_POST['alquilar'], $_SESSION['dni'], date('Y-m-d'));
        ControladorAlquiler::insertar($a);
    }
    
?>

<!doctype html>
<html lang="en">

<head>
  <title>Juegos Comares</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>

<body class="d-flex justify-content-center">
    <div class="container row pt-3">
        <h1>Juegos Comares</h1>
        <?php
        if(!isset($_SESSION['nombre'])){
        ?>
        <form action="" method="POST" class="my-3">
            DNI: <input type="text" name="dni">
            Contraseña: <input type="password" name="password">
            <input class="btn btn-primary" type="submit" name="login" value="login" >
            <a href="register.php" class="btn btn-secondary btn-sm">Registrarse</a>
        </form>
        <?php
        }else{ 
        echo '<h6>Bienvenido '.$_SESSION['nombre'].'</h6>';?>
        <form action="index.php" method="POST" class="pb-3"><input type="submit" name="logout" value="Cerrar Sesion"></form>
        <nav class="nav justify-content-left pb-3">
            <a class="nav-link" href="index.php" aria-current="page">Listado de juegos</a>
            <a class="nav-link" href="juegosAlquilados.php">Listado de juegos alquilados</a>
            <a class="nav-link" href="juegosNoAlquilados.php">Listado de juegos no alquilados</a>
            <a class="nav-link" href="misjuegosAlquilados.php">Mis juegos alquilados</a>
        </nav>
        <?php
        }
        ?>
        <div class="table-responsive">
            <table class="table table-striped
            table-hover	
            table-borderless
            table-dark
            align-middle
            text-center">
                <thead class="table-light">
                  <tr class="table-dark text-center">
                      <th>Carátula</th>
                      <th>Nombre juego</th>
                      <th>Nombre consola</th>
                      <th>Año</th>
                      <th>Precio</th>
                      <th></th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                    <?php 
                        $juegos = ControladorJuego::recuperarTodos();
                        if($juegos){
                            foreach($juegos as $juego){
                                echo '<tr class="table-light" >';
                                if($juego->Alquilado == 'SI'){
                                    echo '<td><a href="verJuego.php?juego='.$juego->Nombre_juego.'"><img style="filter:grayscale(100%);" width=80px src='.$juego->Imagen.'></img></a></td>';
                                }else echo '<td><a href="verJuego.php?juego='.$juego->Nombre_juego.'"><img width=80px src='.$juego->Imagen.'></img></a></td>';
                                echo '<td>'.$juego->Nombre_juego.'</td>';
                                echo '<td>'.$juego->Nombre_consola.'</td>';
                                echo '<td>'.$juego->Anno.'</td>';
                                echo '<td>'.$juego->Precio.'</td>';
                                if(isset($_SESSION['nombre']) && $juego->Alquilado=="NO"){
                                echo '<td><form action="" method="POST"><button class="btn btn-primary" name="alquilar" value="'.$juego->Codigo.'">Alquilar</button></form></td>';
                                }
                                echo '</tr>';
                            }
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
    


  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>
<?php

}catch(PDOException $e){
    echo $e->getMessage();
}
?>