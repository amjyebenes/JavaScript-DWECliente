function menorde3(){
    const numeros = [];
    for(let i=0; i<3;i++){
        numeros[i] = prompt("Introduce 3 numero: ");
    }
    let menor = 10000;
    for (let index = 0; index < numeros.length; index++) {
        if(numeros[index] < menor) menor = numeros[index];
    }

    const resultado = document.createElement("H4");
    resultado.innerText = "El menor es: " + menor;
    let parrafo = document.getElementById("parrafo");
    parrafo.textContent = resultado.textContent;

}