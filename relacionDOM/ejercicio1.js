var d = document;
// mostrar numero de enlaces de la pagina
var numEnlaces = d.querySelectorAll("a").length;
console.log("hay " + numEnlaces + " enlaces");
 
// direccion del penultimo enlace
var penultimoEnlace = d.querySelectorAll("a")[d.querySelectorAll("a").length-2].href;
console.log(penultimoEnlace);

// numero de enlaces que enlazan a marca.es
var enlaces = d.querySelectorAll("a[href='http://www.marca.es/']").length;

console.log("hay " + enlaces + " enlaces del marca");

// numero de enlaces del tercer parrafo
numEnlaces = d.querySelectorAll("p")[2].querySelectorAll("a").length;
console.log("hay " + numEnlaces + " en el tercer parrafo");