let tiempoPasado = (fecha)=>{
    console.log("Ads");
    var fecha_array = fecha.split("/");
    var fecha_date = new Date(fecha_array[2], fecha_array[1] - 1, fecha_array[0]);
    var diferencia = Date.now() - fecha_date.getTime();
    var edad = new Date(diferencia);
    console.log(Math.abs(edad.getUTCFullYear() - 1970));
}
document.addEventListener("load",tiempoPasado(prompt("Introduce una fecha dd/mm/yyyy")));