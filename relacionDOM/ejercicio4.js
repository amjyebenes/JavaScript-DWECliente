function mostrar(){
    document.querySelector("p").innerHTML = "Bienvenido " +
                                             document.getElementById("nombre").value + " " 
                                            + document.getElementById("apellido").value;
}

function limpiar(){
    document.querySelector("p").innerHTML="";
}