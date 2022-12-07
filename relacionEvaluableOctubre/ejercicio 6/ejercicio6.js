let contarLetras = (frase)=>{
    let letras = frase.replaceAll(' ','').split("");
    let vocales = ["a","e","i","o","u"];
    let contV = 0, contC = 0;
    letras.forEach(element => {
        if(vocales.includes(element)) contV++;
        else contC++;
    });
    console.log(frase + " || contiene " + contV + " vocales y " + contC + " consonantes");
}

document.addEventListener("load",contarLetras("aaa eee i bbbccc"));