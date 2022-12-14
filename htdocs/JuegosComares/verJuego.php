<?php 
    require_once 'Controlador/ControladorJuego.php';
    session_start();
    
    $nombrejuego = $_GET['juego'];
    
    $juegos = ControladorJuego::recuperarTodos();
    
    foreach ($juegos as $j) {
        if($j->Nombre_juego == $nombrejuego){
            $juegoseleccionado = $j;
        }
    }
    
?>
<!doctype html>
<html lang="en">

<head>
  <title>Juego</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>

<body class="d-flex justify-content-center">
    
    <div class="container">
        <div class="row">
            <div class="col-12 py-3">
                <a href="index.php"><input type="submit" name="volver" value="Volver a Inicio"></a>
            </div>
            <div class="col-6">
                <img src="<?php echo $juegoseleccionado->Imagen ?>" width="350" height="350" alt="alt"/>
            </div>
            <div class="col-6">
                <div class="row text-center">Nombre: <span class="fw-bold h4 bg-info"><?php echo $juegoseleccionado->Nombre_juego ?></span></div>
                <div class="row text-center">Consola: <span class="fw-bold h4 bg-danger"><?php echo $juegoseleccionado->Nombre_consola ?></span></div>
                <div class="row text-center">Año: <span class="fw-bold h4 bg-info"><?php echo $juegoseleccionado->Anno ?></span></div>
                <div class="row text-center">¿Está alquilado?: <span class="fw-bold h4 bg-danger"><?php echo $juegoseleccionado->Alquilado ?></span></div>
                <div class="row text-center">Precio por dia: <span class="fw-bold h4 bg-info"><?php echo $juegoseleccionado->Precio ?></span></div>
                <div class="row text-center">Descripcion: <span class="fw-bold h4 bg-danger "><?php echo $juegoseleccionado->descripcion ?></span></div>
            </div>
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

