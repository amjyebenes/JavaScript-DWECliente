<?php 
    require_once 'Controlador/ControladorCliente.php';
    $NoCoincideContrasena = true;
    if(isset($_POST['registro']) && !empty($_POST['dni']) && !empty($_POST['password'])){
        if ($_POST['password'] == $_POST['password2']){
            $c = new Cliente($_POST['dni'], $_POST['nombre'], $_POST['apellidos'], $_POST['direccion'], $_POST['localidad'], md5($_POST['password']));
            if(ControladorCliente::insertar($c)){
                header('location:index.php');
            }else{
                echo "Error al insertar cliente en bbdd";
            }
        }else{
            $NoCoincideContrasena = false;
        }
    }
?>
<!doctype html>
<html lang="en">

    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS v5.2.1 -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    </head>

    <body class="d-flex justify-content-center">
        <div class="container row pt-3">
             <a href="index.php"><input type="submit" name="volver" value="Volver a Inicio"></a>
            <h1>Juegos Comares</h1>
            <?php 
            if(!$NoCoincideContrasena){
            ?>
            <div class="alert alert-danger d-flex justify-content-center">
                <span class="text-center fw-bold h6">La contraseña no coincide</span>
            </div>
            <?php 
            $NoCoincideContrasena = true;
            } ?>
            <form action="" method="POST" class="my-3">
                DNI: <input type="text" name="dni"><br>
                Nombre: <input type="text" name="nombre"><br>
                Apellidos: <input type="text" name="apellidos"><br>
                Direccion: <input type="text" name="direccion"><br>
                Localidad: <input type="text" name="localidad"><br>
                Contraseña: <input type="password" name="password"><br>
                Confirmar contraseña: <input type="password" name="password2"><br>
                <input type="submit" name="registro" value="Registro">
                <input type="reset" name="limpiar" value="Borrar datos">
            </form>

        </div>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
        </script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
                integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
        </script>
    </body>
</html>