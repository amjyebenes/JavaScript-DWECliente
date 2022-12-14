<?php
require_once 'Controlador/ControladorAlquiler.php';
require_once 'Controlador/ControladorCliente.php';
require_once 'Controlador/ControladorJuego.php';
try {
    session_start();
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
    <script src="https://kit.fontawesome.com/c3279f0d47.js" crossorigin="anonymous"></script>
    </head>

    <body class="d-flex justify-content-center">
        <div class="container row pt-3">
            <a href="index.php"><input type="submit" name="volver" value="Volver a Inicio"></a>
            <h1>Juegos Comares</h1>
            <h2 class="text-center py-4">Juegos alquilados</h2>
            <?php
            if (isset($_SESSION['nombre'])) {
                $juegos = ControladorJuego::recuperarTodosAlquilados();
                if ($juegos) {
                    ?>
                    <div class="table-responsive py-4">
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
                                    <th>Actual poseedor</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <?php
                                $alquileres = ControladorAlquiler::recuperarTodos();
                                $clientes = ControladorCliente::recuperarTodos();
                                foreach ($juegos as $juego) {
                                    $poseedor = "fallo";
                                    if($alquileres && $clientes){
                                        foreach ($alquileres as $a) {
                                            foreach ($clientes as $c) {
                                                if($a->DNI_cliente == $c->DNI && $a->Codigo_juego == $juego->Codigo){
                                                    $poseedor = $c->Nombre;
                                                }
                                            }
                                        }
                                    
                                    
                                    echo '<tr class="table-light" >';
                                    echo '<td><a href="verJuego.php?juego=' . $juego->Nombre_juego . '"><img width=80px src=' . $juego->Imagen . '></img></a></td>';
                                    echo '<td>' . $juego->Nombre_juego . '</td>';
                                    echo '<td>' . $juego->Nombre_consola . '</td>';
                                    echo '<td>' . $juego->Anno . '</td>';
                                    echo '<td>' . $juego->Precio . '</td>';
                                    echo '<td>' . $poseedor . '</td>';
                                    echo '</tr>'; 
                                    }
                                }
                                ?> 

                            </tbody>
                        </table>
                    </div>


                    <?php
                } else {
                    ?>
                    <div class="alert alert-danger row justify-content-center gap-2">
                        <div class="col-12 d-flex gap-4 justify-content-center py-3">
                            <i class="fa-brands fa-steam fa-xl"></i><i class="fa-brands fa-playstation fa-xl"></i><i class="fa-brands fa-xbox fa-xl"></i>
                        </div>
                        <span class="text-center fw-bold h4">No hay ningun juego alquilado por nadie</span>
                        <a href="index.php" class="d-flex justify-content-center fw-bold h4 text-danger">Alquilar un juego</a>
                        
                    </div>
                    <?php
                }
                ?>
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
}
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>



