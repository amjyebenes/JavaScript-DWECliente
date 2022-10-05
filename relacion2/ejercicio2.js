function pedirNumeros(){
    let suma = 0;
    const numeros = new Array;
    for(let i=0; i<10; i++){
        numeros[i]=prompt("Introduce un numero: ");     
        suma+=parseInt(numeros[i]);
    }
    let s = new String;
    numeros.forEach(element => {
        s+=" "+element;
    });
    document.getElementById("parrafo").textContent= s;
    document.getElementById("parrafo2").textContent = "Suma: " + suma;
}
