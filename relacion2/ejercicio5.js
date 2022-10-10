const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 
                'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
                'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
numero = prompt("Introduzca un numero para calcular su letra de dni: (8 digitos) ");
const resultado = document.createElement("H4");
resultado.innerText = letras[parseInt(numero)%23];
let parrafo = document.getElementsByTagName("p");
parrafo[0].textContent = resultado.textContent;


dni = prompt("Introduzca su dni para verificar si es correcto: ");
digitos = dni.substring(0,dni.length-1);
letra = dni.substring(dni.length-1);
if(letra == letras[parseInt(digitos)%23]){
    alert("es correcto");
}
else alert("no es correcto");

