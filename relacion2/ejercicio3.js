function calcularMultiplos(){
    let numeros = new Array;
    let calculado = 0, producto = 1;
    let st = new String;
    let suma = 0;
    while(calculado<3000){
        calculado = producto*11;
        if(parseInt(calculado)<3000){
        st+=" " + calculado;
        suma+=parseInt(calculado);
        producto++;
        }
    }

    document.getElementById("parrafo").textContent = st + " Suma: " + suma;
}