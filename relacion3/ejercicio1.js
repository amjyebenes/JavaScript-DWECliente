var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var dias = new Array ("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo");
var f = new Date();
const resultado = document.createElement("H4");
var trimestre;
if(f.getMonth()<5){
     trimestre = "primer";
}else if(f.getMonth()<9){
     trimestre = "segundo";
}else {
     trimestre = "tercer";
}
resultado.innerText="Estamos en el dia " + dias[f.getDay()] + ", " + f.getDate() + " del mes " 
                    + meses[f.getMonth()] + " del " + trimestre + " cuatrimestre " + " del año " 
                    + f.getFullYear();
let parrafo = document.getElementsByTagName("p");
parrafo[0].textContent = resultado.textContent;