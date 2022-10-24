let frase = "Miguel Angel";
console.log(frase + " frase original");

let invertida = Array.from(frase).reverse().toString().replaceAll(",","")
console.log(invertida + " frase invertida");